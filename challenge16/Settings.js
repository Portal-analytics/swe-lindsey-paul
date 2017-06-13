import React from "react";
import {
  Flatlist,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text>
        This is the Settings Page
      </Text>
    );
  }
}
