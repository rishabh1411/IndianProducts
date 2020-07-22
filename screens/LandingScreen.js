import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LandingScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        title="Go to Categories"
        onPress={() => {
          props.navigation.navigate({ routeName: "Categories" });
        }}
      />
     
      <Button
        title="Go to Search"
        onPress={() => {
          props.navigation.navigate({ routeName: "Search" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

LandingScreen.navigationOptions = {
  headerTitle: "HOME",
};

export default LandingScreen;
