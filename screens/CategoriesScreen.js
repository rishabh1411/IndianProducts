import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/category-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => (
    <View style={styles.gridContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "Product",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <ImageBackground
          source={itemData.item.image}
          style={styles.gridImage}
          resizeMode="stretch"
        ></ImageBackground>
        <Text style={styles.gridText} numberOfLines={2}>
          {itemData.item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dde8dc",
  },
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
    overflow: "hidden",
    // alignContent: 'center'
  },
  gridImage: {
    height: 200,
    width: "100%",
  },
  gridText: {
    fontWeight: "bold",
    color: "white",
    position: "absolute", // child
    bottom: 20, // position where you want
    right: 20,
    fontSize: 28,
    textAlign: "right",
  },
});

export default CategoriesScreen;
