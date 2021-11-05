/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  BackHandler,
  ToastAndroid,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/core';

// * Components
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WebView from 'react-native-webview';
import CButton from '../components/CButton';
import CText from '../components/CText';
import {RootStackRoutesProps} from '../routes';
import RNRestart from 'react-native-restart';
import NetInfo from '@react-native-community/netinfo';

// * Styles & Assets
import GlobalStyles from '../public/styles/GlobalStyles';
import {createStyles} from '../styles';
import {Colors, Images} from '../assets/themes';
import AsyncStorage from '@react-native-community/async-storage';
import {iOS} from '../public/helper/GlobalHelper';
import NavigationServices from '../routes/NavigationServices';

const INJECTED_JS = `
  const meta = document.createElement('meta');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  meta.setAttribute('name', 'viewport');
  document.getElementsByTagName('head')[0].appendChild(meta);

  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),
    )
  }
`;

let backPressed = 0;

const HomeScreen = () => {
  const route = useRoute<RouteProp<RootStackRoutesProps, 'Main'>>();
  let _webViewRef: any = useRef();

  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const [webUrl, setWebUrl] = useState<string>('');
  const [isPullToRefreshEnabled, setIsPullToRefreshEnabled] =
    useState<boolean>(false);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {url, token} = route.params;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => handleBackButton());
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    if (webUrl.indexOf('customer-logout') > -1) {
      setTimeout(async () => {
        await AsyncStorage.clear();
      });

      return NavigationServices.replace('Auth');
    }

    return () => {
      unsubscribe();
    };
  }, [webUrl]);

  const handleBackButton = () => {
    if (backPressed > 0) {
      BackHandler.exitApp();
      backPressed = 0;
    } else {
      backPressed++;
      ToastAndroid.show('Press Again To Exit', ToastAndroid.SHORT);
      setTimeout(() => {
        backPressed = 0;
      }, 3000);
      return true;
    }
  };

  const onRefresh = () => _webViewRef.current.reload();

  const onWebViewMessage = (e: any) => {
    const {data} = e.nativeEvent;

    try {
      const {scrollTop} = JSON.parse(data);
      setIsPullToRefreshEnabled(scrollTop === 0);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isConnected) {
    return (
      <SafeAreaView style={[GlobalStyles.flexFill, GlobalStyles.bgWhite]}>
        <KeyboardAwareScrollView bounces={false}>
          <View style={[GlobalStyles.alignCenter, GlobalStyles.mt5]}>
            <Image source={Images.noData} style={styles.noInetImg} />

            <CText bold style={[GlobalStyles.size22]} color={Colors.$black}>
              No Internet Connection
            </CText>

            <CText
              center
              color={Colors.$midGrey}
              style={[GlobalStyles.mt2, GlobalStyles.mb2]}>
              {'Please check your internet connection\nand try again'}
            </CText>

            <View style={[GlobalStyles.flexRowCenter, GlobalStyles.mt5]}>
              <CButton
                btnStyle={[GlobalStyles.flex5]}
                onPress={() => {
                  RNRestart.Restart();
                }}>
                Try Again
              </CButton>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.scrollView, GlobalStyles.bgWhite]}>
      <KeyboardAwareScrollView
        onLayout={e => setScrollViewHeight(e.nativeEvent.layout.height)}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={false}
            enabled={isPullToRefreshEnabled}
            onRefresh={onRefresh}
            tintColor="transparent"
            colors={['transparent']}
            style={GlobalStyles.bgTransparent}
          />
        }>
        <WebView
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          domStorageEnabled
          cacheEnabled
          javaScriptEnabled
          ref={_webViewRef}
          onMessage={onWebViewMessage}
          injectedJavaScript={INJECTED_JS}
          source={{
            uri: url,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }}
          onLoadStart={e => {
            console.log(e.nativeEvent.url);
            setWebUrl(e.nativeEvent.url);
            setIsLoading(true);

            if (!e.nativeEvent.loading) {
              if (e.nativeEvent.url !== url) {
                return NavigationServices.replace('Main2', {
                  url: e.nativeEvent.url,
                  token,
                });
              }
            }
          }}
          onLoad={() => setIsLoading(false)}
          style={{height: scrollViewHeight, webHeight: '100%'}}
        />
      </KeyboardAwareScrollView>
      {isLoading && !iOS && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" style={styles.loading} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = createStyles({
  scrollView: {
    flex: 1,
    height: '100%',
  },
  body: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noInetImg: {
    width: '280rem',
    height: '280rem',
    resizeMode: 'contain',
  },
});

export default HomeScreen;
