import React from 'react';
import YouToolStackContainer from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <YouToolStackContainer/>
          </PersistGate>
        </Provider>
    );
  }
}


