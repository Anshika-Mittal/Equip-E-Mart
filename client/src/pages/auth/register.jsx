import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center max-w-md mx-auto py-6">
  <h1 className="text-4xl font-black tracking-tighter text-slate-800 dark:text-white mb-4">
    Create new account
  </h1>
  <p className="text-lg text-slate-600 dark:text-slate-300">
    Already have an account?
    <Link
      className="font-semibold ml-1.5 text-teal-600 dark:text-teal-400 underline decoration-teal-600/50 dark:decoration-teal-400/50 decoration-2 underline-offset-4 hover:decoration-teal-600 dark:hover:decoration-teal-300 transition-all duration-300"
      to="/auth/login"
    >
      Login Here
    </Link>
  </p>
</div>
      
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
