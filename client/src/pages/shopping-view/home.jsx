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
import p11 from '../../assets/featured/p11.jpg';
import p12 from '../../assets/featured/p12.jpg';
import p14 from '../../assets/featured/p14.jpg';
import p15 from '../../assets/featured/p15.jpg';
import p13 from '../../assets/featured/p13.jpg';
import p16 from '../../assets/featured/p16.jpg';
import p17 from '../../assets/featured/p17.jpg';
import p18 from '../../assets/featured/p18.jpg';
import p19 from '../../assets/featured/p19.jpg';



const bannerList = [bannerOne, bannerTwo, bannerThree, bannerFour];
const featureProdList = [
  {
    id: 1,
    image: p1,  // image path
    title: "Wooden Chair",
    price: 120.00,
    salePrice: 100.00,
    totalStock: 50,
    brand: "Furniture Co."
  },
  {
    id: 2,
    image: p2,
    title: "Office Desk",
    price: 250.00,
    salePrice: 230.00,
    totalStock: 30,
    brand: "OfficeWorks"
  },
  {
    id: 3,
    image: p3,
    title: "Recliner Sofa",
    price: 500.00,
    salePrice: 450.00,
    totalStock: 15,
    brand: "Comfy Living"
  },
  {
    id: 4,
    image: p4,
    title: "Dining Table Set",
    price: 350.00,
    salePrice: 320.00,
    totalStock: 20,
    brand: "HomeStyle"
  },
  {
    id: 5,
    image: p5,
    title: "Wooden Scoop and Bowl",
    price: 450.00,
    salePrice: 420.00,
    totalStock: 40,
    brand: "DreamSleep"
  },
  {
    id: 6,
    image: p6,
    title: "Coffee Table",
    price: 150.00,
    salePrice: 130.00,
    totalStock: 25,
    brand: "WoodCraft"
  },
  {
    id: 7,
    image: p7,
    title: "Bookshelf",
    price: 180.00,
    salePrice: 160.00,
    totalStock: 35,
    brand: "Library Essentials"
  },
  {
    id: 8,
    image: p8,
    title: "Storage Cabinet",
    price: 220.00,
    salePrice: 200.00,
    totalStock: 45,
    brand: "SpaceSaver"
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


import {
  BedDoubleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Flower,
  Flower2,
  Heater,
  LucideHome,
  SofaIcon,
  Table2Icon,
  TicketMinus,
  WavesIcon,
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
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "DoubleBed", label: "Double Bed", icon: BedDoubleIcon },
  { id: "SingleBed", label: "Single Bed", icon: BedDoubleIcon },
  { id: "Sofa", label: "Sofa", icon: SofaIcon },
  { id: "Accessories", label: "Accessories", icon: Table2Icon },
  { id: "Chair", label: "Chair", icon: Table2Icon },
];

const brandsWithIcon = [
  { id: "WoodenStreet", label: "WoodenStreet", icon: WavesIcon },
  { id: "HomeTown", label: "HomeTown", icon: LucideHome },
  { id: "Durian", label: "Durian", icon: Flower2 },
  { id: "Nilkamal", label: "Nilkamal", icon: Flower },
  { id: "Ikea", label: "Ikea", icon: TicketMinus },
  { id: "GodrejInterio", label: "GodrejInterio", icon: Heater },
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
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Render the images based on the bannerList */}
      {bannerList.length > 0 &&
        bannerList.map((banner, index) => (
          <img
            key={index}
            src={banner} // Dynamically load images
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-1/2 left-1/2 w-[600px] h-[400px] object-cover transition-opacity duration-1000`}
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronLeftIcon className="w-4 h-4" />
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
    
    {/* Other Content Sections */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoriesWithIcon.map((categoryItem) => (
            <Card
              onClick={() =>
                handleNavigateToListingPage(categoryItem, "category")
              }
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                <span className="font-bold">{categoryItem.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">BRANDS FOR YOU</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandsWithIcon.map((brandItem) => (
            <Card
              onClick={() => handleNavigateToListingPage(brandItem, "brand")}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                <span className="font-bold">{brandItem.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  


<section className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">
      OUR FEATURED PRODUCTS
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featureProdList && featureProdList.length > 0
        ? featureProdList.map((productItem, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <ShoppingProductTile
                handleGetProductDetails={handleGetProductDetails}
                product={productItem}
                handleAddtoCart={handleAddtoCart}
              />
            </div>
          ))
        : <p>No products available.</p>}
    </div>
    
  </div>
</section>




    <ProductDetailsDialog
      open={openDetailsDialog}
      setOpen={setOpenDetailsDialog}
      productDetails={productDetails}
    />
  </div>
);


}

export default ShoppingHome;
