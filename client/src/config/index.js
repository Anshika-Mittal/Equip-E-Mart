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
  { id: "drtrust", label: "Dr Trust", path: "/shop/listing" },
  { id: "beurer", label: "Beurer", path: "/shop/listing" },
  { id: "sunfox", label: "Sunfox", path: "/shop/listing" },
  { id: "omrom", label: "Omrom", path: "/shop/listing" },
  { id: "drmorependg", label: "Dr Morepen DG", path: "/shop/listing" },
  { id: "polymedicure", label: "Polymedicure", path: "/shop/listing" },
  {
    id: "Search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  drtrust: "Dr Trust",
  beurer: "Beurer",
  sunfox: "Sunfox",
  omrom: "Omrom",
  drmorependg: "Dr Morepen DG",
  polymedicure: "Polymedicure",
  ageasy: "AGEasy",
  niscomed: "Niscomed",
  agaro: "Agaro",
  contec: "Contec",
};


export const filterOptions = {
  Category: [
    { id: "drtrust", label: "Dr Trust" },
    { id: "beurer", label: "Beurer" },
    { id: "sunfox", label: "Sunfox" },
    { id: "omrom", label: "Omrom" },
    { id: "drmorependg", label: "Dr Morepen DG" },
    { id: "polymedicure", label: "Polymedicure" },
    { id: "ageasy", label: "AGEasy" },
    { id: "niscomed", label: "Niscomed" },
    { id: "agaro", label: "Agaro" },
    { id: "contec", label: "Contec" }
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
