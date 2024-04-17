import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import useAuthHooks from "../../Hooks/useAuthHooks";
import PasswordReset from "../../PasswordReset/PasswordReset";

const Login = () => {
  const { signInUser } = useAuthHooks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // handle register
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password).then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col-reverse  lg:flex-row-reverse">
          <div
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <PasswordReset />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn flex btn-primary items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-[#e5958e] border-transparent border-2 hover:bg-transparent hover:border-[#e5958e] hover:text-[#e5958e] text-white">
                  Login
                </button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
            </form>
            <SocialLogin />
          </div>
          <div
            className="text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-[#e5958e]">
              Login now!
            </h1>
            <p className="py-6  text-3xl lg:text-4xl">
              Welcome to Gorib Homes Real Estate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
