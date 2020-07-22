import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import { Categories, SubCategories } from "./categories-data";

let categoryArray = []

Categories.forEach(
  (category) => categoryArray.push(new Category(category.id, category.name, category.image, category.level))
);

let subCategoryArray = []

SubCategories.forEach(
  (subCat) => subCategoryArray.push(new SubCategory(subCat.id, subCat.name, subCat.parentId, subCat.level))
)

export const CATEGORIES = categoryArray;
export const SUBCATEGORIES = subCategoryArray;

// export const CATEGORIES = [new Category('dwea', 'bgfdsbs bsfbd', [])];
