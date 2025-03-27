import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import bannerFour from "../../assets/banner-4.webp";

import p1 from '../../assets/featured/p1.jpg';
import p2 from '../../assets/featured/p2.jpg';
import p3 from '../../assets/featured/p3.jpg';
import p4 from '../../assets/featured/p4.jpg';
import p5 from '../../assets/featured/p5.jpg';
import p6 from '../../assets/featured/p6.jpg';
import p7 from '../../assets/featured/p7.jpg';
import p8 from '../../assets/featured/p8.jpg';
import p9 from '../../assets/featured/p9.jpg';
import p10 from '../../assets/featured/p10.jpg';



const bannerList = [bannerOne, bannerTwo, bannerThree, bannerFour];
const featureProdList = [
  {
    id: 1,
    image: p1,  // image path
    title: "USA Gold Standard III Stethoscope",
    price: 1199.00,
    totalStock: 50,
    category: "sunfox"
  },
  {
    id: 2,
    image: p2,
    title: "Portable suction",
    price: 4599.00,
    totalStock: 30,
    category: "sunfox"
  },
  {
    id: 3,
    image: p3,
    title: "Nebulizer",
    price: 2499,
    totalStock: 15,
    category: "sunfox"
  },
  {
    id: 4,
    image: p4,
    title: "Yonker Multipara Patient Monitor YK-8000C Neontal+Pediatric",
    price: 26000.00,
    totalStock: 20,
    category: "sunfox"
  },
  {
    id: 5,
    image: p5,
    title: "ECG",
    price: 11899.00,
    totalStock: 40,
    category: "sunfox"
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


import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
// import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "drtrust", label: "Dr Trust" },
    { id: "beurer", label: "Beurer" },
    { id: "sunfox", label: "Sunfox" },
    { id: "omrom", label: "Omrom" },
    { id: "drmorependg", label: "Dr Morepen DG" },
    { id: "polymedicure", label: "Polymedicure" },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  // function handleAddtoCart(getCurrentProductId, getTotalStock) {
  //   console.log(cartItems);
  //   let getCartItems = cartItems.items || [];

  //   if (getCartItems.length) {
  //     const indexOfCurrentItem = getCartItems.findIndex(
  //       (item) => item.productId === getCurrentProductId
  //     );
  //     if (indexOfCurrentItem > -1) {
  //       const getQuantity = getCartItems[indexOfCurrentItem].quantity;
  //       if (getQuantity + 1 > getTotalStock) {
  //         toast({
  //           title: `Only ${getQuantity} quantity can be added for this item`,
  //           variant: "destructive",
  //         });

  //         return;
  //       }
  //     }
  //   }

  //   dispatch(
  //     addToCart({
  //       userId: user?.id,
  //       productId: getCurrentProductId,
  //       quantity: 1,
  //     })
  //   ).then((data) => {
  //     if (data?.payload?.success) {
  //       dispatch(fetchCartItems(user?.id));
  //       toast({
  //         title: "Product is added to cart",
  //       });
  //     }
  //   });
  // }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [bannerList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  

// RETURN
return (
  
  <div className="flex flex-col min-h-screen">
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Render the images based on the bannerList */}
      {bannerList.length > 0 &&
        bannerList.map((banner, index) => (
          <img
            key={index}
            src={banner} // Dynamically load images
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-80 left-1/2 w-full h-screen overflow-hidden object-cover transition-opacity duration-1000`}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        ))}
      
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + bannerList.length) % bannerList.length
          )
        }
        className="absolute top-1/2 left-4 text-xl transform -translate-y-1/2 bg-white-80"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </Button>
      
      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide(
            (prevSlide) => (prevSlide + 1) % bannerList.length
          )
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white-80"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </Button>
    </div>
    
    {/* Other Content Sections */}
    <section className="py-12 bg-gray-50 h-[500px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl m-10 font-bold text-center mb-20">
          SHOP BY BRANDS
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categoriesWithIcon.map((categoryItem) => (
            <Card
              onClick={() =>
                handleNavigateToListingPage(categoryItem, "category")
              }
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-8">
                <span className="font-bold text-2xl">{categoryItem.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  
<section className="p-15 mb-10">
  <div className="container mx-auto ">
    <h2 className="text-5xl  font-bold text-center m-10">
      OUR FEATURED PRODUCTS
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {featureProdList && featureProdList.length > 0
        ? featureProdList.map((productItem, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <ShoppingProductTile
                handleGetProductDetails={handleGetProductDetails}
                product={productItem}
                // handleAddtoCart={handleAddtoCart}
              />
            </div>
          ))
        : <p>No products available.</p>}
    </div>
    
  </div>
</section>




    {/* <ProductDetailsDialog
      open={openDetailsDialog}
      setOpen={setOpenDetailsDialog}
      productDetails={productDetails}
    /> */}
  </div>
);


}

export default ShoppingHome;
