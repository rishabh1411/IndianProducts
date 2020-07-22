import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LandingScreen from "../screens/LandingScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductScreen from "../screens/ProductScreen";
import SearchScreen from "../screens/SearchScreen";
import ResultScreen from "../screens/ResultScreen";

const ProductNavigator = createStackNavigator({
  Landing: LandingScreen,
  Categories: CategoriesScreen,
  Product: ProductScreen,
  Search: SearchScreen,
  Result: ResultScreen,
});

export default createAppContainer(ProductNavigator);
