import useAuthHooks from "../../Hooks/useAuthHooks";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin, facebookLogin } =
    useAuthHooks();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around mb-10">
        <FaGoogle
          onClick={() => handleSocialLogin(googleLogin)}
          className="text-[20px] cursor-pointer text-red-500"
          title="Google"
        ></FaGoogle>
        <FaGithub
          onClick={() => handleSocialLogin(githubLogin)}
          className="text-[20px] cursor-pointer text-red-500"
          title="Github"
        ></FaGithub>
        <FaTwitter
          onClick={() => handleSocialLogin(twitterLogin)}
          className=" text-[20px] cursor-pointer text-red-500"
          title="Twitter"
        ></FaTwitter>
        <FaFacebook
          onClick={() => handleSocialLogin(facebookLogin)}
          className="text-[20px] cursor-pointer text-red-500"
          title="Facebook"
        ></FaFacebook>
      </div>
    </>
  );
};

export default SocialLogin;
