"use client";
import { registerUser } from "@/app/action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    event.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const res = await registerUser(formData);
      if (res.status === 201) {
        toast.success(res.message, {
          autoClose: 1000,
          position: "top-right",
        });

        setTimeout(() => {
          router.push("/login");
        }, 1100);
      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      toast.error(err.message, {
        autoClose: 2800,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" required />
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" required />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
