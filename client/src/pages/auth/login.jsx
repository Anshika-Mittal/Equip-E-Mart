import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="container bg-[#F5F5F5] p-6 rounded-lg shadow-md">
      <div className="cta">
        <h1 className="text-4xl font-black tracking-tighter text-slate-800 dark:text-white mb-4">
          Sign in to your account
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Don't have an account?
          <Link
            className="font-semibold ml-1.5 text-teal-600 dark:text-teal-400 underline decoration-teal-600/50 dark:decoration-teal-400/50 decoration-2 underline-offset-4 hover:decoration-teal-600 dark:hover:decoration-teal-300 transition-all duration-300"
            to="/auth/register"
          >
            Register Here
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        buttonClass="bg-[#8D6E63] text-white px-4 py-2 rounded-md hover:bg-[#734C39] transition-all duration-300"
      />
    </div>
  );
}

export default AuthLogin;
