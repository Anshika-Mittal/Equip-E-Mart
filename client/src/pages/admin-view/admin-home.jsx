import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarChart, Users, Package, DollarSign, List, MessageSquare } from "lucide-react";

function AdminHome() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const [activeTab, setActiveTab] = useState("dashboard");

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
  const menuItems = [
    { name: "Dashboard", icon: <BarChart size={20} />, key: "dashboard" },
    { name: "Users", icon: <Users size={20} />, key: "users" },
    { name: "Products", icon: <Package size={20} />, key: "products" },
    { name: "Orders", icon: <List size={20} />, key: "orders" },
    { name: "Transactions", icon: <DollarSign size={20} />, key: "transactions" },
    { name: "Chatbot Insights", icon: <MessageSquare size={20} />, key: "chatbot" },
  ];

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
        <h1>Hiiiiiiiiiiiiiiii</h1>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Welcome to Equip-E-Mart Admin Dashboard
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
        <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Equip-E-Mart Admin</h1>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`flex items-center gap-2 p-3 rounded-md cursor-pointer transition ${
                activeTab === item.key ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Logout</button>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">2,345</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Listings</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold">890</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">User</th>
                <th className="p-3">Action</th>
                <th className="p-3">Product</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">John Doe</td>
                <td className="p-3">Rented</td>
                <td className="p-3">MacBook Pro</td>
                <td className="p-3 text-green-600">Approved</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Sarah K.</td>
                <td className="p-3">Purchased</td>
                <td className="p-3">Office Chair</td>
                <td className="p-3 text-yellow-500">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Alex J.</td>
                <td className="p-3">Listed</td>
                <td className="p-3">Gaming Laptop</td>
                <td className="p-3 text-red-600">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product & Order Management */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Product Management</h3>
            <p className="mt-2">✔ Approve/Reject Listings</p>
            <p>🚀 Feature Top Products</p>
            <p>📊 View Product Insights</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Order Management</h3>
            <p className="mt-2">📜 View & Process Orders</p>
            <p>🔄 Manage Refunds</p>
            <p>💳 Track Transactions</p>
          </div>
        </div>

        {/* Chatbot Insights */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Chatbot Insights</h3>
          <p className="mt-2">🤖 Negotiation Success Rate: 78%</p>
          <p>📬 Most Requested Discounts: 15%</p>
          <p>📉 Chatbot Performance Graph</p>
        </div>
      </div>
    </div>
    <div>
       <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
        isEditMode={currentEditedId !== null}
      />
      <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
        Upload
      </Button>
    </div>
      </div>
    
  );
}

export default AdminHome;
