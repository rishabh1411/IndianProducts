import React from "react";
import {  StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const HeaderComp = (props) => {
  return (
    <Header {...props}
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F12E05",
  },
});

export default HeaderComp;
