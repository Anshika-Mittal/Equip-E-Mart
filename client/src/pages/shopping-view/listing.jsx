import ProductFilter from "@/components/shopping-view/filter";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import ShoppingProductTile from "@/components/shopping-view/product-tile";
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


const prodList = [
  {
    id: 1,
    image: p1,  // image path
    title: "USA Gold Standard III Stethoscope",
    price: 1199.00,
    totalStock: 50,
    category: "drtrust"
  },
  {
    id: 2,
    image: p2,
    title: "Portable suction",
    price: 4599.00,
    totalStock: 30,
    category: "beurer"
  },
  {
    id: 3,
    image: p3,
    title: "Nebulizer",
    price: 2499,
    totalStock: 15,
    category: "omrom"
  },
  {
    id: 4,
    image: p4,
    title: "Yonker Multipara Patient Monitor YK-8000C Neontal+Pediatric",
    price: 26000.00,
    totalStock: 20,
    category: "drmorependg"
  },
  {
    id: 5,
    image: p5,
    title: "ECG",
    price: 11899.00,
    totalStock: 40,
    category: "polymedicure"
  },
  {
    id: 6,
    image: p6,
    title: "Drive Medical Lightweight Steel Transport Wheelchair",
    price: 18420.00,
    totalStock: 25,
    category: "sunfox"
  },
  {
    id: 7,
    image: p7,
    title: "PO30 Pulse Oximeter",
    price: 1870.00,
    totalStock: 35,
    category: "sunfox"
  },
  {
    id: 8,
    image: p8,
    title: "12 Channel ECG machine with printer",
    price: 40000.00,
    totalStock: 45,
    category: "sunfox"
  },
  {
    id: 9,
    image: p9,
    title: "Proctoscope",
    price: 1700.00,
    totalStock: 50,
    category: "sunfox"
  },
  {
    id: 10,
    image: p10,
    title: "BP-02 Blood Pressure Monitor",
    price: 1200.00,
    totalStock: 20,
    category: "sunfox"
  }
];

// ShoppingProductTile.js
const ShopTile = ({ product, handleGetProductDetails, handleAddtoCart }) => {
  return (
<div className="product-tile w-[300px] h-[400px] p-15 mb-10">
    <img src={product.image} alt={product.title} className="h-[300px] overflow-hidden w-[300px] product-image" />
    <h2 className="m-4 text-xl h-[50px] tracking-tighter mb-5">{product.title}</h2>
      <button className="bg-blue-950 hover:bg-blue-980 text-xl text-white font-bold m-2 p-2 rounded mb-2" onClick={() => handleAddtoCart(product)}>Add to Cart</button>
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

  // console.log(productList, "productListproductListproductList");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-5xl font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-8 w-8" />
                  <span className="text-xl p-2">Sort by</span>
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
  {prodList &&
    prodList
      .filter((productItem) => {
        // If no filters are applied, show all products
        if (!filters || Object.keys(filters).length === 0) {
          return true;
        }

        // Check if the product matches the selected filters
        return Object.keys(filters).every((filterKey) =>
          filters[filterKey].includes(productItem[filterKey])
        );
      })
      .map((productItem) => (
        <ShopTile
          key={productItem.id} // Ensure each item has a unique key
          handleGetProductDetails={handleGetProductDetails}
          product={productItem}
          // handleAddtoCart={handleAddtoCart}
        />
      ))}
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
