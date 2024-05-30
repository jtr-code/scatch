import React from "react";

const Register = () => {
  return (
    <div className="grid  bg-slate-200 relative place-items-center min-w-full">
      <blockquote className="absolute top-20 -left-4 text-lg  font-bold">Scatch</blockquote>
      <form className="flex flex-col justify-center sm:w-[80%] w-[90%] gap-4 min-h-screen">
        <h1 className="text-2xl font-medium ">
          welcome to <span className="text-blue-500 font-bold text-3xl">Scatch</span>
        </h1>
        <h2 className="font-medium text-2xl">create your account</h2>
        <input
          type="email"
          className="p-3 bg-white placeholder-zinc-400 font-medium"
          placeholder="FullName"
        />
        <input
          type="email"
          className="p-3 bg-white placeholder-zinc-400 font-medium"
          placeholder="Email"
        />
        <input
          type="password"
          className="p-3 bg-white placeholder-zinc-400 font-medium"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-light rounded-2xl p-1 max-w-max px-4 py-1"
        >
          Create My Account
        </button>
      </form>
    </div>
  );
};

export default Register;
