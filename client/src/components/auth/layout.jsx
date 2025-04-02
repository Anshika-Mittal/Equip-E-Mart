import { Outlet } from "react-router-dom";
// import AdminSideBar from "@components/admin-view/sidebar";
// import AdminHeader from "@components/admin-view/header";
import { useState } from "react";
import logo from "@/components/shopping-view/logo.jpeg";


function AuthLayout() {
  
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen w-full">
     
      {/* Left side (with background animation and text) */}
      <div className="hidden lg:flex items-center justify-center  w-1/2 px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-800 opacity-40 animate-pulse" />
        <div className="text-center  mx-auto py-6 relative z-10">
          <h1 className="text-7xl font-extrabold tracking-tighter text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
            <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-800 text-transparent bg-clip-text">
              
          <img src={logo} alt="" className="w-30 h-30 ml-40 p-10 object-cover" />WELCOME TO </span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-800 text-transparent bg-clip-text">
               EQUIP-E-MART </span>
          </h1>
          <p className="text-3xl text-slate-100 font-semibold leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
            Your trusted partner in <span className="text-teal-500">revolutionizing</span> hospital procurement.
          </p>
        </div>
      </div>

      {/* Right side (Login/Register forms) */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 relative">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-teal-500 hover:to-indigo-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
