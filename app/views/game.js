'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import {Actions} from 'react-native-router-flux';

module.exports = class GameView extends Component {
  constructor(props) {
      super(props);
  }

  onPressFeed() {
      Actions.pop;
  }

  render() {
      return (
          <View style={styles.container}>
            <Button clickHandler={Actions.pop} text={"Home"}/>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
  },
});

AppRegistry.registerComponent('GameView', () => GameView);