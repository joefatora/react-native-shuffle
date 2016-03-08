'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  SliderIOS,
} from 'react-native';
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';
import Button from 'apsl-react-native-button';
import _ from 'underscore';
import {Actions} from 'react-native-router-flux';

module.exports = class CreateView extends Component {
  constructor(props) {
    super(props);
    this.targetMassConverter = this.targetMassConverter.bind(this);
  }

  onPressFeed() {
      Actions.pop;
  }

  render() {
      const { state } = this.props;
      console.log(this.props);
      
      return (
          <View style={styles.container}>
              <Button onPress={this.onPressFeed.bind(this)} textStyle={{fontSize: 18}}>
                Home
              </Button>
          </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
  },
  text: {
    //alignItems: 'center',
    textAlign: 'center',
  },
  slider: {
    height: 20,
    margin: 40,
  },
});

AppRegistry.registerComponent('CreateView', () => CreateView);