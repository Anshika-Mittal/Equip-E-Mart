import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarChart, Users, DollarSign, List } from "lucide-react";
import { getFeatureImages } from "@/store/common-slice";


function AdminHome() {
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const menuItems = [
    { name: "Dashboard", icon: <BarChart size={20} />, key: "dashboard" },
    { name: "Users", icon: <Users size={20} />, key: "users" },
    { name: "Orders", icon: <List size={20} />, key: "orders" },
    { name: "Transactions", icon: <DollarSign size={20} />, key: "transactions" },
  ];

  return (
    <div className="h-screen max-w-[70vw] ml-72 flex flex-col">
      <div className="flex-1 p-6">
        <h2 className="text-4xl font-semibold">Admin </h2>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-4 gap-4 mt-10 text-xl">
          {[
            { title: "Total Users", count: "2,345" },
            { title: "Total Listings", count: "1,234" },
            { title: "Total Orders", count: "890" },
            { title: "Revenue", count: "$12,345" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
          ))}
        </div>       

        
      </div>
    </div>
  );
}

export default AdminHome;
