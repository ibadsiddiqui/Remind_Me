import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import configureStore from "./src/redux/store";
import { Provider } from "react-redux";
import { cachedImages } from './src/assets/images';
import firebaseConfig from './src/constants/Firebase';
import * as firebase from 'firebase';
import Colors from './src/constants/Colors';

const store = configureStore().store
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <Provider store={store}>
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar hidden={true} />
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {

    await Asset.loadAsync(cachedImages),
      await Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        "rubik-medium": require('./src/assets/fonts/Rubik-Medium.ttf'),
        "rubik-regular": require('./src/assets/fonts/Rubik-Regular.ttf'),
        "opensans-regular": require('./src/assets/fonts/OpenSans-Regular.ttf'),
      });
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
