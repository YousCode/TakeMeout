import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import LoginScreen from './components/screens/auth/LoginScreen';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(LoginScreen, {}, null));