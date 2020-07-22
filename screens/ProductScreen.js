import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import { CATEGORIES, SUBCATEGORIES } from "../data/category-data";

const ProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList data={SUBCATEGORIES} />
    </View>
  );
};

ProductScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParams("categoryId")
  
}

const styles = StyleSheet.create({
  screen: {},
});

export default ProductScreen;
