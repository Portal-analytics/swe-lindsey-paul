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
import Swiper from "react-native-swiper";
import Home from "./Home.js";
import Settings from "./Settings.js";

const SideMenu = require("react-native-side-menu");
const Menu = require("./Menu");

//Button Component
class Button extends React.Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}
      >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

// App.js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: "Profile",
      typingText: "hello",
      textList: []
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item
    });
  };

  onTextChange = text => {
    this.setState({
      ...this.state,
      typingText: text
    });
  };

  onTextSubmit = e => {
    let now = new Date();
    console.log(now);
    const text = this.state.typingText;

    let message = { text: now };
    let list = this.state.textList.slice().concat(message);

    this.setState({
      ...this.state,
      textList: list
    });
  };

  render() {
    const menu = <Menu navigator={navigator} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <NativeRouter>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to="/" style={styles.navItem}>
                <Text>Home</Text>
              </Link>

              <Link to="/settings" style={styles.navItem}>
                <Image
                  source={require("./Gear.jpg")}
                  style={{ width: 25, height: 25 }}
                />
              </Link>

            </View>

            <Route
              exact
              path="/"
              component={props =>
                <Home
                  {...props}
                  onTextChange={this.onTextChange}
                  onTextSubmit={this.onTextSubmit}
                  messages={this.textList}
                  state={this.state}
                />}
            />
            <Route exact path="/settings" component={Settings} />

          </View>
        </NativeRouter>

        <Button style={styles.button} onPress={() => this.toggle()} />

      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    padding: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  header: {
    fontSize: 20
  }
});
