
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl h-[80px] font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] pt-4 pb-4 text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
          </div>
          <div className="flex justify-between items-center pt-2 pb-2">
            
            {product?.price > 0 ? (
              <span className="text-lg font-semibold text-primary">
                ${product?.price}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {(
          <Button
  onClick={() => {
    if (product?._id ) {
      handleAddtoCart(product?._id);
    } else {
      console.log('Error: Invalid product details');
      console.log(product?._id);

    }
  }}
  className="w-full text-[1rem]"
>
  Add to cart
</Button>

        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
