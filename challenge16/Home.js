import React from "react";
import {
  Flatlist,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

// Home Component
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.messages}
        <TextInput
          style={{ height: 40 }}
          placeholder="Chat"
          value={this.props.state.typingText}
          onChangeText={text => this.props.onTextChange(text)}
        />

        <Button title="Send" onPress={this.props.onTextSubmit} />
      </View>
    );
  }
}
