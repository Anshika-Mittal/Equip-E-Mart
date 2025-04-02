import { BarChart, Users, Package, List, DollarSign, MessageSquare, AlignJustify } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

const adminSidebarMenuItems = [
  { name: "Dashboard", icon: BarChart, key: "dashboard", path: "/admin/dashboard" },
  { name: "Users", icon: Users, key: "users", path: "/admin/users" },
  { name: "Products", icon: Package, key: "products", path: "/admin/products" },
  { name: "Orders", icon: List, key: "orders", path: "/admin/orders" },
  { name: "Transactions", icon: DollarSign, key: "transactions", path: "/admin/transactions" },
  { name: "Chatbot Insights", icon: MessageSquare, key: "chatbot", path: "/admin/chatbot" },
];


function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
      <aside
        className={clsx(
          "fixed top-0 left-0 h-screen w-72 bg-gray-900 text-white p-5 transform transition-transform z-50"
        )}
      >
        {/* Sidebar Header */}
        <div className=" items-center ml-6">
          <h1 onClick={() => navigate("/admin/admin-home")} className="text-2xl font-bold cursor-pointer">
            Admin Panel
          </h1>

        </div>
        {/* Menu Items */}
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.key}
          onClick={() => navigate(menuItem.path)}
          className={clsx(
            "flex items-center gap-3 p-3 rounded-md cursor-pointer transition text-gray-300",
            window.location.pathname === menuItem.path ? "bg-gray-700 text-white" : "hover:bg-gray-800"
          )}
        >
          <menuItem.icon className="size-5" />
          <span className="font-medium">{menuItem.name}</span>
        </div>
           ))}

        {/* Sidebar Menu */}
        {/* <MenuItems setOpen={setOpen} /> */}
      </aside>
  );
}

export default AdminSideBar;
