import React from "react";

export default function SignUp() {
  return (
    <div className="mx-auto px-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center font-bold">Register here</h1>
      <form
        action=""
        className="bg-slate-500 w-1/2 border border-green-400 rounded-md px-2 py-2"
      >
        <div className="mb-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input type="email" id="email" className="" />
        </div>
      </form>
    </div>
  );
}
