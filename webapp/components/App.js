import React, {Component} from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import messages from '../messages';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Navbar from './Navbar/NavBar';

class App extends Component {
  render() {
    const {lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <HashRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/about' component={AboutPage}/>
              <Redirect from="*" to={'/'} />
            </Switch>
          </div>
        </HashRouter>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
  };
}

export default connect(mapStateToProps)(App);
