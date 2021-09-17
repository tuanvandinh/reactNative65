import React from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = () => <Text>halllo</Text>;

class Router extends React.PureComponent {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
          <HomeScreen />
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    // session_id: state.user.session_id,
    // network: state.network,
  };
};

export default connect(mapStateToProps)(Router);
