import { memo } from "react";
import PropTypes from "prop-types";

const LoginForm = memo(({ className = "" }) => {
  return (
    <div
      className={`relative bg-[url('/public/divelementorwidgetwrap@3x.png')] bg-cover bg-no-repeat bg-top rounded-xl text-center text-sm text-gray-200 font-manrope ${className} p-4 md:p-6 lg:p-8`}
    >
      <form className="mx-auto max-w-md w-full p-6">
        <h1 className="text-3xl-5 font-extrabold text-gray-300 text-left mb-4">
          Log in
        </h1>
        <p className="text-lg font-medium text-goldenrod-200 text-left mb-8">
          To access
        </p>

        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="Password"
            type="password"
          />
        </div>

        <button className="w-2/5 bg-primary rounded-xl h-10 flex items-center justify-center mb-6 cursor-pointer">
          <div className="text-sm font-medium text-white">Log In</div>
        </button>
      </form>
      <span className="text-center text-black">
        Don't have an account?{" "}
        <span>
          <a className="text-blue-600" href="/signup">
            Signup
          </a>
        </span>
      </span>
    </div>
  );
});

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
