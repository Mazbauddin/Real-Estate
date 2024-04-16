import useAuthHooks from "../../Hooks/useAuthHooks";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuthHooks();
  return (
    <>
      <div className="divider">continue with</div>

      <div className="flex justify-around">
        <button
          onClick={() => googleLogin()}
          className="btn btn-primary btn-sm btn-outline tooltip"
          data-tip="Google"
        >
          Google
        </button>
        <button
          onClick={() => githubLogin()}
          className="btn btn-primary btn-sm btn-outline tooltip"
          data-tip="Github"
        >
          Github
        </button>
        <button
          onClick={() => twitterLogin()}
          className="btn btn-primary btn-sm btn-outline tooltip"
          data-tip="Twitter"
        >
          Twitter
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
