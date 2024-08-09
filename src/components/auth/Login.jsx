import { useState } from "react"
import useScrollToTop from '../../utils/hooks/useScrollToTop';

export default function Login() {

  useScrollToTop();

  return (
    <main className="login relative my-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex justify-center sm:justify-end items-center" style={{height: '781px'}}>
        <section id="form" className="w-96 flex flex-col gap-4 bg-white rounded-md px-5 py-24">
          <form
            className="flex flex-col gap-6 w-full relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="font-semibold tracking-wider text-3xl">Login To Exclusive</h1>
            <p className="font-medium">Enter your details below</p>

            <label className="absolute -right-96" htmlFor="username">Username</label>
            <input
              className="border-b border-b-dark outline-none text-secondaryGray placeholder:text-secondaryGray py-2"
              type="username"
              id="username"
              required
              placeholder="Username"
            />

            <label className="absolute -right-96" htmlFor="password">Password</label>
            <input
              className="border-b border-b-dark outline-none text-secondaryGray placeholder:text-secondaryGray py-2"
              type="password"
              id="password"
              required
              placeholder="Password"
            />
            
            <div className="btns flex justify-between text-nowrap gap-20">
              <button type="submit" className=" bg-primaryRed text-white h-bg-red font-medium rounded-md w-full py-4">Log in</button>
              <button type="button" className=" text-primaryRed h-bg-red hover:text-white w-full py-4">Forgot Password? </button>
            </div>
          </form>
        </section>
      </div>
      <div className="side-img absolute top-0 left-0 h-full -z-10 right-0 sm:right-1/3 lg:right-1/2">
        <img src="images/logo/Side Image.png" alt="" className="h-full w-full"/>
      </div>
    </main>
  )

};
