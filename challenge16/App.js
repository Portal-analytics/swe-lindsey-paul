import React from "react";
import { Flatlist, Image, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

// Home Component
const Home = () =>
  <Text style={styles.header}>
    This is the Homepage
  </Text>;

// Settings Component
const Settings = () =>
  <Text style={styles.header}>
    This is the Settings Page
  </Text>;

// Profile Component
const Profile = () =>
  <Text style={styles.header}>
    This is the Profile Page
  </Text>;

// App.js
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/settings" style={styles.navItem}>
              <Text>Settings</Text>
            </Link>
            <Link to="/profile" style={styles.navItem}>
              <Text>Profile</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />

        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
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
