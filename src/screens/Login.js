import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import Video from 'react-native-video';

export default class Login extends Component {
  state = {};

  handleLogin = () => {};

  render() {
    return (
      <View>
        <Card>
          <Card.Title title="Login Screen" />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button mode="contained">Login</Button>
            <Button mode="">Register</Button>
          </Card.Content>
        </Card>
        {/*
        <Video
          source={prodvid}
          style={styles.backgroudVideo}
          resizeMode="cover"
        />
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudVideo: {
    height: '100%',
  },
});
