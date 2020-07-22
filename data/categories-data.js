const Categories = [
  {
    id: "cid1",
    name: "Electronic and communications",
    image: require("../assets/images/image1.jpg"),
    level: 1,
  },
  {
    id: "cid2",
    name: "Gaming",
    image: require("../assets/images/image2.jpg"),
    level: 1,
  },
  // {
  //   id: "cid3",
  //   name: "Electricals",
  //   image: require("../assets/images/image3.jpg"),
  // },
  {
    id: "cid4",
    name: "Fashions",
    image: require("../assets/images/image4.jpg"),
    level: 1,
  },
  {
    id: "cid5",
    name: "Furnitures",
    image: require("../assets/images/image5.jpg"),
    level: 1,
  },
  // {
  //   id: "cid6",
  //   name: "Hobbies, Sports, Books",
  //   image: require("../assets/images/image6.jpg"),
  // },
  {
    id: "cid7",
    name: "Home Appliances",
    image: require("../assets/images/image7.jpg"),
    level: 1,
  },
  {
    id: "cid8",
    name: "Vehicles",
    image: require("../assets/images/image8.jpg"),
    level: 1,
  },
  {
    id: "cid9",
    name: "Beauty Products",
    image: require("../assets/images/image9.jpg"),
    level: 1,
  },
  {
    id: "cid10",
    name: "Others",
    image: require("../assets/images/image10.jpg"),
    level: 1,
  },
];

const SubCategories = [
  {
    id: "cid11",
    name: "Mobile",
    parentId: "cid1",
    level: 2,
  },
  {
    id: "cid12",
    name: "Other Accesseries",
    parentId: "cid1",
    level: 2,
  },
  {
    id: "cid13",
    name: "Computer",
    parentId: "cid1",
    level: 2,
  },
  {
    id: "cid111",
    name: "Charger",
    parentId: "cid11",
    level: 3,
  },
  {
    id: "cid21",
    name: "Clothes",
    parentId: "cid2",
    level: 2,
  },
];

const Brands = [
  {
    id: "b1",
    name: "Vestige",
  },
  {
    id: "b2",
    name: "Micromax",
  },
  {
    id: "b3",
    name: "Onida",
  },
  {
    id: "b4",
    name: "Havells",
  },
  {
    id: "b5",
    name: "",
  },
  {
    id: "b6",
    name: "",
  },
  {
    id: "b7",
    name: "",
  },
]

export default { Categories, SubCategories, Brands };
