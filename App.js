import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import LoginForm from './src/components/LoginForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

class App extends Component {
  //
  componentDidMount() {
    // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDUGxcnPnTSU2w-GtHYMcpg_htJw5_8zsE',
    authDomain: 'react-native-manager-42427.firebaseapp.com',
    databaseURL: 'https://react-native-manager-42427.firebaseio.com',
    projectId: 'react-native-manager-42427',
    storageBucket: 'react-native-manager-42427.appspot.com',
    messagingSenderId: '767852931332'
  };
  firebase.initializeApp(config);
  }
//

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View>
        <LoginForm />
      </View>
       </Provider>
    );
  }
}


export default App;