import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuthHooks from "../../Hooks/useAuthHooks";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordReset from "../../PasswordReset/PasswordReset";

const Register = () => {
  const { createUser, updateUserProfile } = useAuthHooks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    //create user and update profile
    createUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        navigate(from);
      });
    });
  };

  // visible
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="hero min-h-screen bg-base-200 pb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="text-center lg:text-left"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-[#e5958e]">
              Register Now!
            </h1>
            <p className="py-6 text-3xl lg:text-4xl">
              Welcome to Gorib Homes Real Estate
            </p>
            <p className="py-6 text-3xl lg:text-4xl">Please Create a Account</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type={visible ? "text" : "password"}
                    className="grow"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />

                  <div
                    className="text-xl cursor-pointer "
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </div>
                  <PasswordReset />
                </label>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn flex btn-primary items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-[#e5958e] border-transparent border-2 hover:bg-transparent hover:border-[#e5958e] hover:text-[#e5958e] text-white">
                  Register
                </button>
              </div>
              <label className="label">
                Already have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
