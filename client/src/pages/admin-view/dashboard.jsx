import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  console.log(uploadedImageUrl, "uploadedImageUrl");

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  console.log(featureImageList, "featureImageList");

  return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Welcome to HAND2HAND Admin Dashboard
        </h1>
        <h2
          style={{
            fontSize: "24px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          ADMIN
        </h2>
        <ProductImageUpload
          setImageFile={setImageFile}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
        />
        <Button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleUploadFeatureImage}
        >
          Upload Feature Image
        </Button>
      </div>
    // <div>
    //   <ProductImageUpload
    //     imageFile={imageFile}
    //     setImageFile={setImageFile}
    //     uploadedImageUrl={uploadedImageUrl}
    //     setUploadedImageUrl={setUploadedImageUrl}
    //     setImageLoadingState={setImageLoadingState}
    //     imageLoadingState={imageLoadingState}
    //     isCustomStyling={true}
    //     // isEditMode={currentEditedId !== null}
    //   />
    //   <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
    //     Upload
    //   </Button>
    // </div>
  );
}

export default AdminDashboard;
