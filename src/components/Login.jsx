import React from "react";

const Login = () => {
  return (
    <div className="grid">
      <form className="flex flex-col justify-center min-w-96 gap-4">
        <h1 className="text-2xl font-medium ">Login your account</h1>
        <input
          type="email"
          className=" p-3 bg-zinc-100 placeholder-zinc-400 font-medium"
          placeholder="Email"
        />
        <input
          type="password"
          className=" p-3 bg-zinc-100 placeholder-zinc-400 font-medium"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-light rounded-2xl p-1 max-w-max px-4 py-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
