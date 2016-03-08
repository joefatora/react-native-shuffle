'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';
import {
  bindActionCreators
} from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as brewActions from './actions/brewActions';
import * as recipeActions from './actions/recipeActions';
import Welcome from './views/welcome';
import CreateView from './views/create';
import GameView from './views/game';
import ReactNativeRouter, { Route, Schema, Animations, TabBar } from 'react-native-router-flux';
const Router = connect()(ReactNativeRouter.Router);

class Shuffle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, brewActions, recipeActions} = this.props;
    return (
      <Router hideNavBar={true}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route name="welcome" component={Welcome} initial={true} wrapRouter={true} title="Shuffle"/>
        <Route name="join" component={GameView} title="Game"/>
        <Route name="create" component={CreateView} title="Create Game"/>
      </Router>  
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    shuffleActions: bindActionCreators(shuffleActions, dispatch)
  })
)(Shuffle);