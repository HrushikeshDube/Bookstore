import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Registered Successfully");
        }
        localStorage.setItem("User", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error", err);
          alert(`Error :  ${err.response.data.message}`);
        }
      });
    reset(); // clear form fields after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px] relative">
        {/* Close Button on Top-Left */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"
          onClick={() => window.history.back()} // or replace with navigation logic
        >
          ✕
        </button>

        <h3 className="font-bold text-xl text-center mb-6">SignUp</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
          >
            Signup
          </button>
        </form>

        {/* Navigation Link */}
        <p className="text-sm text-center mt-4">
          Already Registered?{" "}
          <Link to="/" className="underline text-blue-500 cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
