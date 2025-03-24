export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "DoubleBed", label: "Double Bed" },
      { id: "SingleBed", label: "Single Bed" },
      { id: "Sofa", label: "Sofa" },
      { id: "Accessories", label: "Accessories" },
      { id: "Chair", label: "Chair" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "WoodenStreet", label: "WoodenStreet" },
      { id: "HomeTown", label: "HomeTown" },
      { id: "Durian", label: "Durian" },
      { id: "Nilkamal", label: "Nilkamal" },
      { id: "Ikea", label: "Ikea" },
      { id: "GodrejInterio", label: "GodrejInterio" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price ",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  // {
  //   id: "home",
  //   label: "Home",
  //   path: "/shop/home",
  // },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "DoubleBed",
    label: "Double Bed",
    path: "/shop/listing",
  },
  {
    id: "SingleBed",
    label: "Single Bed",
    path: "/shop/listing",
  },
  {
    id: "Sofa",
    label: "Sofa",
    path: "/shop/listing",
  },
  {
    id: "Chair",
    label: "Chair",
    path: "/shop/listing",
  },
  {
    id: "Accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  // {
  //   id: "Search",
  //   label: "Search",
  //   path: "/shop/search",
  // },
];

export const categoryOptionsMap = {
  DoubleBed: "Double Bed",
  SingleBed: "Single Bed",
  Sofa: "Sofa",
  Accessories: "Accessories",
  Chair: "Chair",
};

export const brandOptionsMap = {
  Burrow: "Burrow",
  Adidas: "Adidas",
  puma: "Floyd",
  HomeStyle: "HomeStyle",
  levi: "Maiden Home",
  zara: "IKEA",
  hNm: "Godrej Interio",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Double Bed" },
    { id: "Women", label: "Single Bed" },
    { id: "Sofa", label: "Sofa" },
    { id: "accessories", label: "Accessories" },
    { id: "Chair", label: "Chair" },
  ],


  brands: [
    { id: "WoodenStreet", label: "WoodenStreet" },
    { id: "HomeTown", label: "HomeTown" },
    { id: "Durian", label: "Durian" },
    { id: "Nilkamal", label: "Nilkamal" },
    { id: "Ikea", label: "Ikea" },
    { id: "GodrejInterio", label: "GodrejInterio" },
  ],

};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
