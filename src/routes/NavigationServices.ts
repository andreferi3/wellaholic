import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef =
  createNavigationContainerRef<ReactNavigation.RootParamList>();

function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function replace(routeName: string, params?: object | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch({
      ...StackActions.replace(routeName, params),
    });
  }
}

function pop(n: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch({
      ...StackActions.pop(n),
    });
  }
}

function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch({
      ...StackActions.popToTop(),
    });
  }
}

export default {
  goBack,
  navigate,
  replace,
  pop,
  popToTop,
};
