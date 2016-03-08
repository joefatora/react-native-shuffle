'use strict';
import React, {
  AsyncStorage,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import {Actions} from 'react-native-router-flux';

module.exports = class WelcomeView extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome, Joe!
                </Text>
                <Button onPress={Actions.create} textStyle={{fontSize: 18}}>
                  Start Game
                </Button>

                <Button onPress={Actions.join} textStyle={{fontSize: 18}}>
                  Join Game
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('WelcomeView', () => WelcomeView);