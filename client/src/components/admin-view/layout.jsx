
import AdminSideBar from "@/components/admin-view/sidebar";
import AdminHeader from "./header";
import AdminHome from "@/pages/admin-view/admin-home";

import { useState } from "react";

function AdminLayout({ children }) {
  
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="">
        <AdminHeader setOpen={setOpenSidebar} />
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <AdminHome/>
    </div>
  );
}

export default AdminLayout;
