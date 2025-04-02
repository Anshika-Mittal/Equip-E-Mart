import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <div className="flex flex-1 max-h-[50px] p-2 justify-end">  
    
      <Button
        onClick={handleLogout}
        className="inline-flex rounded-md px-4 py-2 text-xl font-medium shadow"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
}

export default AdminHeader;
