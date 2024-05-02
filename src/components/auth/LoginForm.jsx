"use client";

import loginUser from "@/app/action/loginAction";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await loginUser(formData);

      if (res.status === 200) {
        setAuth(res.user);

        toast.success(res.message, {
          autoClose: 1000,
          position: "top-right",
        });

        setTimeout(() => {
          router.push("/");
        }, 1100);
      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      toast.error(err.message, {
        autoClose: 1500,
        position: "top-right",
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
