import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.menuIconContainer}>
        <Ionicons name="md-menu" color="white" size={40} />
      </View>
      {/* <View style={styles.headerTextContainer}> */}
        <Text style={styles.headerTitle}>{props.title}</Text>
      {/* </View> */}
      <Text>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F12E05",
    paddingTop: 35,
    textAlign: "center",
  },
  menuIconContainer: {
    paddingTop: 5,
    paddingLeft: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  headerLogin: {
    fontSize: 20,
    color: "#fff",
  },
  headerTextContainer: {},
});

export default Header;
