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
import p11 from '../../assets/featured/p11.jpg';
import p12 from '../../assets/featured/p12.jpg';
import p14 from '../../assets/featured/p14.jpg';
import p15 from '../../assets/featured/p15.jpg';
import p13 from '../../assets/featured/p13.jpg';
import p16 from '../../assets/featured/p16.jpg';
import p17 from '../../assets/featured/p17.jpg';
import p18 from '../../assets/featured/p18.jpg';
import p19 from '../../assets/featured/p19.jpg';
const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19];

const prodList = [
  {
    id: 1,
    image: p1, // image path
    title: "Wooden Chair",
    price: 120.0,
    salePrice: 100.0,
    totalStock: 50,
    brand: "Adidas",
  },
  {
    id: 2,
    image: p2,
    title: "Office Desk",
    price: 250.0,
    salePrice: 230.0,
    totalStock: 30,
    brand: "Adidas",
  },
  {
    id: 3,
    image: p3,
    title: "Recliner Sofa",
    price: 500.0,
    salePrice: 450.0,
    totalStock: 15,
    brand: "Adidas",
  },
  {
    id: 4,
    image: p4,
    title: "Dining Table Set",
    price: 350.0,
    salePrice: 320.0,
    totalStock: 20,
    brand: "Adidas",
  },
    {
      id: 5,
      image: p5,
      title: "Wooden Scoop and Bowl",
      price: 450.00,
      salePrice: 420.00,
      totalStock: 40,
      brand: "Adidas"
    },
    {
      id: 6,
      image: p6,
      title: "Coffee Table",
      price: 150.00,
      salePrice: 130.00,
      totalStock: 25,
      brand: "Adidas"
    },
    {
      id: 7,
      image: p7,
      title: "Bookshelf",
      price: 180.00,
      salePrice: 160.00,
      totalStock: 35,
      brand: "Adidas"
    },
    {
      id: 8,
      image: p8,
      title: "Storage Cabinet",
      price: 220.00,
      salePrice: 200.00,
      totalStock: 45,
      brand: "Adidas"
    },
      {
        id: 9,
        image: p9,
        title: "Chair",
        price: 90.00,
        salePrice: 80.00,
        totalStock: 50,
        brand: "Modern Living"
      },
      {
        id: 10,
        image: p10,
        title: "Chair",
        price: 500.00,
        salePrice: 470.00,
        totalStock: 20,
        brand: "WardrobePro"
      },
      {
        id: 11,
        image: p11,
        title: "Wooden Plate",
        price: 120.00,
        salePrice: 100.00,
        totalStock: 30,
        brand: "Reflections"
      },
      {
        id: 12,
        image: p12,
        title: "Sectional Sofa",
        price: 600.00,
        salePrice: 550.00,
        totalStock: 15,
        brand: "ComfyLiving"
      },
      {
        id: 13,
        image: p13,
        title: "Center Table",
        price: 120.00,
        salePrice: 100.00,
        totalStock: 40,
        brand: "HomeFurnish"
      },
      {
        id: 14,
        image: p14,
        title: "Armchair",
        price: 200.00,
        salePrice: 180.00,
        totalStock: 30,
        brand: "RelaxPlus"
      },
      {
        id: 15,
        image: p15,
        title: "Storage Bowls",
        price: 150.00,
        salePrice: 130.00,
        totalStock: 25,
        brand: "SpaceMax"
      },
      {
        id: 16,
        image: p16,
        title: "Flower Vase",
        price: 170.00,
        salePrice: 150.00,
        totalStock: 50,
        brand: "Furniture Plus"
      },
      {
        id: 17,
        image: p17,
        title: "Storage Cups",
        price: 350.00,
        salePrice: 300.00,
        totalStock: 20,
        brand: "RelaxHome"
      },
      {
        id: 18,
        image: p18,
        title: "Water Bottle",
        price: 120.00,
        salePrice: 100.00,
        totalStock: 40,
        brand: "DreamRest"
      },
      {
        id: 19,
        image: p19,
        title: "Tea Cups",
        price: 220.00,
        salePrice: 200.00,
        totalStock: 30,
        brand: "HomeStyle"
      }
];

// ShoppingProductTile.js
const ShopTile = ({ product, handleGetProductDetails, handleAddtoCart }) => {
  return (
<div className="product-tile">
  <div className="product-image-container">
    <img src={product.image} alt={product.title} className="product-image" />
  </div>
  <div className="product-info">
    <h2>{product.title}</h2>
    <p>Price: ${product.salePrice.toFixed(2)}</p>
    <div className="button-group">
      <button className="bg-cyan-500 hover:bg-cyan-700 text-black font-bold py-2 px-4 rounded" onClick={() => handleGetProductDetails(product.id)}>View Details</button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddtoCart(product)}>Add to Cart</button>
    </div>
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
