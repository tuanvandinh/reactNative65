import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {insertPerson, loadPersons} from '~src/models/actions';
import {Button} from 'react-native-paper';
import openConnection from '../../models/default';

export default class Home extends Component {
  state = {
    persons: [],
  };

  componentDidMount = () => {
    this.setState({isloading: true}, this._getDB());
  };

  _getDB = () => {
    this._reloadData();
    openConnection().then(realm => {
      realm.addListener('change', () => {
        this._reloadData();
      });
    });
  };

  _reloadData = () => {
    loadPersons()
      .then(persons => {
        this.setState({persons});
      })
      .catch(error => {
        this.setState({persons: []});
      });
    //console.log('reloadData');
  };

  render() {
    const {persons} = this.state;
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          onPress={() =>
            insertPerson({
              email: 'tuan.dinh.jr@gmail.com',
              first_name: 'tuan',
              last_name: 'dinh',
              password: 'adsf',
              user_name: 'tunjs',
              user_token: 'lllsls',
            }).catch(err => alert(err))
          }>
          insert person
        </Button>
        {persons.length > 0 && persons.map(p => <Text> {p.first_name}</Text>)}
      </View>
    );
  }
}
