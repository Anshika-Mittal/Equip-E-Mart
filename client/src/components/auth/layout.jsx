import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        
        <div className="text-center max-w-md mx-auto py-6">
 <h1 className="text-4xl font-black tracking-tighter text-white mb-4">
   Welcome to <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">Hand2Hand</span>
 </h1>
 <p className="text-lg text-slate-300 leading-relaxed">
   Unlock <span className="text-teal-300 font-semibold">sustainable living</span> with smart, affordable solutions. Whether you're looking to <span className="text-blue-300 font-semibold">rent the latest gadgets</span> or find <span className="text-purple-300 font-semibold">quality renewed furniture</span>, Hand2Hand is your gateway to <span className="text-emerald-300 font-semibold">eco-friendly</span>, budget-conscious choices.
 </p>
</div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
