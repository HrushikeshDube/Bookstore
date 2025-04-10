import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // <-- add this
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Perform login logic here...

    // Reset input fields
    reset();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mt-4 mb-2">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <br />

              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-around mt-6 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="text-sm">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
