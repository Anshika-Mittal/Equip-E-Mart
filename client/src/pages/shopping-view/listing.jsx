import ProductFilter from "@/components/shopping-view/filter";

import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { sortOptions } from "@/config";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import { ArrowUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import p1 from "../../assets/featured/p1.jpg";
import p2 from "../../assets/featured/p2.jpg";
import p3 from "../../assets/featured/p3.jpg";
import p4 from "../../assets/featured/p4.jpg";
import p5 from "../../assets/featured/p5.jpg";
import p6 from "../../assets/featured/p6.jpg";
import p7 from "../../assets/featured/p7.jpg";
import p8 from "../../assets/featured/p8.jpg";
import p9 from '../../assets/featured/p9.jpg';
import p10 from '../../assets/featured/p10.jpg';
import p11 from "../../assets/featured/p11.jpg";
import p12 from "../../assets/featured/p12.jpg";
import p13 from "../../assets/featured/p13.jpg";
import p14 from "../../assets/featured/p14.jpg";
import p15 from "../../assets/featured/p15.jpg";
import p16 from "../../assets/featured/p16.jpg";
import p17 from "../../assets/featured/p17.jpg";
import p18 from "../../assets/featured/p18.jpg";
import p19 from "../../assets/featured/p19.jpg";
import p20 from "../../assets/featured/p20.jpg";
import p21 from "../../assets/featured/p21.jpg";
import p22 from "../../assets/featured/p22.jpg";
import p23 from "../../assets/featured/p23.jpg";
import p24 from "../../assets/featured/p24.jpg";
import p25 from "../../assets/featured/p25.jpg";
import p26 from "../../assets/featured/p26.jpg";
import p27 from "../../assets/featured/p27.jpg";
import p28 from "../../assets/featured/p28.jpg";
import p29 from "../../assets/featured/p29.jpg";
import p30 from "../../assets/featured/p30.jpg";
import p31 from "../../assets/featured/p31.jpg";
import p32 from "../../assets/featured/p32.jpg";
import p33 from "../../assets/featured/p33.jpg";
import p34 from "../../assets/featured/p34.jpg";
import p35 from "../../assets/featured/p35.jpg";
import p36 from "../../assets/featured/p36.jpg";
import p37 from "../../assets/featured/p37.jpg";
import p38 from "../../assets/featured/p38.jpg";
import p39 from "../../assets/featured/p39.jpg";
import p40 from "../../assets/featured/p40.jpg";
import p41 from "../../assets/featured/p41.jpg";
import p42 from "../../assets/featured/p42.jpg";
import p43 from "../../assets/featured/p43.jpg";
import p44 from "../../assets/featured/p44.jpg";
import p45 from "../../assets/featured/p45.jpg";
import p46 from "../../assets/featured/p46.jpg";
import p47 from "../../assets/featured/p47.jpg";
import p48 from "../../assets/featured/p48.jpg";
import p49 from "../../assets/featured/p49.jpg";
import p50 from "../../assets/featured/p50.jpg";


// const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10
//   , p11, p12, p13, p14, p15, p16, p17, p18, p19
// ];

const prodList = [
  // Dr Trust Products
  {
    id: 1,
    image: p1,
    title: "110 Fully Automatic Digital Blood Pressure Monitor",
    price: 1535.0,
    category: "drtrust",
  },
  {
    id: 2,
    image: p2,
    title: "Bestest Plus Compressor Nebulizer Kit",
    price: 2710.0,
    category: "drtrust",
  },
  {
    id: 3,
    image: p3,
    title: "408 Grey Compressor Nebulizer",
    price: 1780.0,
    category: "drtrust",
  },
  {
    id: 4,
    image: p4,
    title: "IHJ00060 Bluetooth Digital Blood Pressure Monitor",
    price: 3105.0,
    category: "drtrust",
  },
  {
    id: 5,
    image: p5,
    title: "209 NL-50D Blue Finger Tip Pulse Oximeter",
    price: 2558.0,
    category: "drtrust",
  },

  // Beurer Products
  {
    id: 6,
    image: p6,
    title: "PO 40 Pulse Oximeter",
    price: 3200.0,
    category: "beurer",
  },
  {
    id: 7,
    image: p7,
    title: "BM 27 Blood Pressure Monitor",
    price: 2500.0,
    category: "beurer",
  },
  {
    id: 8,
    image: p8,
    title: "FT 65 Multi-Functional Thermometer",
    price: 1800.0,
    category: "beurer",
  },
  {
    id: 9,
    image: p9,
    title: "GL 50 Evo Glucometer",
    price: 2700.0,
    category: "beurer",
  },
  {
    id: 10,
    image: p10,
    title: "IH 18 Nebulizer",
    price: 2300.0,
    category: "beurer",
  },

  // Sunfox Products
  {
    id: 11,
    image: p11,
    title: "Spandan Portable ECG Device",
    price: 5999.0,
    category: "sunfox",
  },
  {
    id: 12,
    image: p12,
    title: "SF1 Pulse Oximeter",
    price: 1500.0,
    category: "sunfox",
  },
  {
    id: 13,
    image: p13,
    title: "SF2 Digital Thermometer",
    price: 500.0,
    category: "sunfox",
  },
  {
    id: 14,
    image: p14,
    title: "SF3 Blood Pressure Monitor",
    price: 2000.0,
    category: "sunfox",
  },
  {
    id: 15,
    image: p15,
    title: "SF4 Glucometer",
    price: 1700.0,
    category: "sunfox",
  },

  // Omron Products
  {
    id: 16,
    image: p16,
    title: "BP7900 Complete Wireless Upper Arm Blood Pressure Monitor + EKG",
    price: 13800.0,
    category: "omron",
  },
  {
    id: 17,
    image: p17,
    title: "HEM 7120 Fully Automatic Digital Blood Pressure Monitor",
    price: 2500.0,
    category: "omron",
  },
  {
    id: 18,
    image: p18,
    title: "MC 246 Digital Thermometer",
    price: 300.0,
    category: "omron",
  },
  {
    id: 19,
    image: p19,
    title: "HGM-112 Glucometer",
    price: 1800.0,
    category: "omron",
  },
  {
    id: 20,
    image: p20,
    title: "NE C28 Compressor Nebulizer",
    price: 2800.0,
    category: "omron",
  },

  // Dr Morepen Products
  {
    id: 21,
    image: p21,
    title: "BP 02 Blood Pressure Monitor",
    price: 1087.0,
    category: "drmorepen",
  },
  {
    id: 22,
    image: p22,
    title: "BG 03 Gluco One Glucose Monitoring System",
    price: 524.0,
    category: "drmorepen",
  },
  {
    id: 23,
    image: p23,
    title: "ST01A Deluxe Stethoscope",
    price: 264.0,
    category: "drmorepen",
  },
  {
    id: 24,
    image: p24,
    title: "MT 100 Digi Classic Digital Thermometer",
    price: 190.0,
    category: "drmorepen",
  },
  {
    id: 25,
    image: p25,
    title: "CN 10 Compressor Nebuliser",
    price: 1449.0,
    category: "drmorepen",
  },

  // Polymedicure Products
  {
    id: 26,
    image: p26,
    title: "Chemo Port",
    price: 5000.0,
    category: "polymedicure",
  },
  {
    id: 27,
    image: p27,
    title: "Health Port Power",
    price: 5500.0,
    category: "polymedicure",
  },
  {
    id: 28,
    image: p28,
    title: "PICC Port",
    price: 6000.0,
    category: "polymedicure",
  },
  {
    id: 29,
    image: p29,
    title: "Ryle’s Tube",
    price: 150.0,
    category: "polymedicure",
  },
  {
    id: 30,
    image: p30,
    title: "Umbilical Catheter",
    price: 200.0,
    category: "polymedicure",
  },

  // Ageasy Products
  {
    id: 31,
    image: p31,
    title: "Digital Blood Pressure Monitor",
    price: 2200.0,
    category: "ageasy",
  },
  {
    id: 32,
    image: p32,
    title: "Infrared Forehead Thermometer",
    price: 1500.0,
    category: "ageasy",
  },
  {
    id: 33,
    image: p33,
    title: "Pulse Oximeter",
    price: 1300.0,
    category: "ageasy",
    },
    {
      id: 34,
      image: p34,
      title: "Digital Weighing Scale",
      price: 1700.0,
      category: "ageasy",
    },
    {
      id: 35,
      image: p35,
      title: "Nebulizer Machine",
      price: 2500.0,
      category: "ageasy",
    },
    {
      id: 36,
      image: p36,
      title: "Fingertip Pulse Oximeter",
      price: 1200.0,
      category: "ageasy",
    },
  
    // Niscomed Products
    {
      id: 37,
      image: p37,
      title: "PC-60B1 Fingertip Pulse Oximeter",
      price: 1600.0,
      category: "niscomed",
    },
    {
      id: 38,
      image: p38,
      title: "SPM-50 Patient Monitor",
      price: 9800.0,
      category: "niscomed",
    },
    {
      id: 39,
      image: p39,
      title: "VC-20C Nebulizer",
      price: 3200.0,
      category: "niscomed",
    },
    {
      id: 40,
      image: p40,
      title: "ECG 3-Channel Machine",
      price: 24000.0,
      category: "niscomed",
    },
    {
      id: 41,
      image: p41,
      title: "SPM-10 Multiparameter Monitor",
      price: 12000.0,
      category: "niscomed",
    },
  
    // Agaro Products
    {
      id: 42,
      image: p42,
      title: "NB-21 Nebulizer",
      price: 2100.0,
      category: "agaro",
    },
    {
      id: 43,
      image: p43,
      title: "BP-501 Blood Pressure Monitor",
      price: 1900.0,
      category: "agaro",
    },
    {
      id: 44,
      image: p44,
      title: "FT-301 Infrared Thermometer",
      price: 1600.0,
      category: "agaro",
    },
    {
      id: 45,
      image: p45,
      title: "PG-10 Glucometer",
      price: 1400.0,
      category: "agaro",
    },
    {
      id: 46,
      image: p46,
      title: "WE-01 Digital Weighing Scale",
      price: 1100.0,
      category: "agaro",
    },
  
    // Contec Products
    {
      id: 47,
      image: p47,
      title: "CMS50D Pulse Oximeter",
      price: 2000.0,
      category: "contec",
    },
    {
      id: 48,
      image: p48,
      title: "CMS5100 Patient Monitor",
      price: 15000.0,
      category: "contec",
    },
    {
      id: 49,
      image: p49,
      title: "ECG100G Portable ECG Machine",
      price: 22000.0,
      category: "contec",
    },
    {
      id: 50,
      image: p50,
      title: "ABPM50 Ambulatory Blood Pressure Monitor",
      price: 18000.0,
      category: "contec",
    }
  ];


// ShoppingProductTile.js
const ShopTile = ({ product, handleGetProductDetails, handleAddtoCart }) => {
  return (
<div className="product-tile bg-white shadow-lg h-100 rounded-xl p-4 w-70 hover:shadow-2xl transition duration-300">
  <div className="product-image-container h-70 w-full flex items-center justify-center rounded-lg overflow-hidden">
    <img 
      src={product.image} 
      alt={product.title} 
      className="product-image object-cover w-full transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div className="h-20">
  <h2 className="text-xl font-semibold mt-3 text-gray-900 ">{product.title}</h2>
  <p className="text-gray-600 text-xl">Price: <span className="text-gray-600 font-bold">${product.price}</span></p>
  
  </div>
  
  <div className="button-group h-10 flex justify-between mt-4">
    <button 
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      onClick={() => handleGetProductDetails(product.id)}
    >
      View Details
    </button>
    <button 
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      onClick={() => handleAddtoCart(product)}
    >
      Add to Cart
    </button>
  </div>
</div>


  );
};

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  console.log(queryParams, "queryParams");

  return queryParams.join("&");
}

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { toast } = useToast();

  const categorySearchParam = searchParams.get("category");

  function handleSort(value) {
    setSort(value);
  }

  function handleFilter(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  function handleGetProductDetails(getCurrentProductId) {
    console.log(getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    console.log(cartItems);
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, [categorySearchParam]);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);

  useEffect(() => {
    if (filters !== null && sort !== null)
      dispatch(
        fetchAllFilteredProducts({ filterParams: filters, sortParams: sort })
      );
  }, [dispatch, sort, filters]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  console.log(productList, "productListproductListproductList");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
          <span className="text-muted-foreground">
              {prodList?.length} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {prodList && prodList.length > 0
            ? prodList.map((productItem) => (
              
                <ShopTile
                
                key={productItem.id} // Make sure to add a unique key for each item
                handleGetProductDetails={handleGetProductDetails}
                product={productItem}
                handleAddtoCart={handleAddtoCart}
                />
              ))
            : null}
        </div>
      </div>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}


export default ShoppingListing;
