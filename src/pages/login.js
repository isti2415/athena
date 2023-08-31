import React from "react";
import Nav from "../components/nav.js";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Nav />
      <div className="flex-grow flex flex-col items-center justify-center gap-4">
        <div className="card py-4 px-8 w-96 glass flex flex-col items-center">
          <img src="/hero.svg" className="hidden md:block" />
          <span className="text-2xl font-bold text-secondary mt-4">
            Login to your account
          </span>
          <form className="flex flex-col gap-4 w-full p-4">
            <label className="form-control">
              <span className="label">
                <span className="label-text">Email</span>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </label>
            <label className="form-control">
              <span className="label">
                <span className="label-text">Password</span>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </label>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-secondary"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
