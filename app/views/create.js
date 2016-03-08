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

module.exports = class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.targetMassConverter = this.targetMassConverter.bind(this);
  }

  onPressFeed() {
      Actions.pop;
  }

  selectBrewMethod() {
      //this.props.navigator.pop()
  }

  setFavoriteBrewMethod(value) {
    console.info(value);
      //this.props.navigator.pop()
  }

  optionsRef() {
    return this.refs['OPTIONLIST'];
  }

  renderOptions() {
    return _.map(this.props.state.recipes.brewMethodOptions, function (option) {
      return <Option key={option.name}>{option.name}</Option>;
    });

  }

  targetMassConverter() {
    return 195 + ((this.props.state.beanMassForBrewMethod - 13) * 15)
  }

  render() {
      const { state, setBeanMassForBrewMethod, selectBrewMethod, setFavoriteBrewMethod, recipes } = this.props;
      console.log(this.props);
      
      return (
          <View style={styles.container}>
              <Button onPress={this.onPressFeed.bind(this)} textStyle={{fontSize: 18}}>
                Home
              </Button>
              <Select
                width={250}
                ref="SELECT1"
                optionListRef={this.optionsRef.bind(this)}
                defaultValue="Select a Brew Method ..."
                onSelect={this.setFavoriteBrewMethod.bind(this)}>
                {this.renderOptions()}
              </Select>

              <Text>Hey</Text>

              <OptionList ref="OPTIONLIST"/>

              <Button onPress={this.selectBrewMethod.bind(this)} textStyle={{fontSize: 18}}>
                Select Brew Method
              </Button>
              <Text style={styles.text}>
                Bean Weight: {this.props.state.brew.beanMassForBrewMethod + 'grams \n'}
                Target Mass: {this.props.state.brew.waterMassForBrewMethod + 'grams \n'}
              </Text>
              <SliderIOS
                style={styles.slider}
                value={this.props.state.brew.beanMassForBrewMethod}
                minimumValue={13.0}
                maximumValue={114.0}
                step={1}
                onValueChange={(value) => this.setBeanMassForBrewMethod(value)} />
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

AppRegistry.registerComponent('RecipeView', () => RecipeView);