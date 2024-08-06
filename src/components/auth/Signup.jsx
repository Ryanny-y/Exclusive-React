import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Signup() {

  return (
    <main className="signup relative my-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex justify-center sm:justify-end items-center" style={{height: '781px'}}>
        <section id="form" className="w-96 flex flex-col gap-4 bg-white rounded-md px-5 py-24">
          <form
            className="flex flex-col gap-6 w-full relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="font-semibold tracking-wider text-3xl">Create an account</h1>
            <p className="font-medium">Enter your details below</p>

            <label className="absolute -right-96" htmlFor="name">Name</label>
            <input
              className="border-b border-b-dark outline-none text-secondaryGray placeholder:text-secondaryGray py-2"
              type="text"
              id="name"
              required
              placeholder="Name"
            />

            <label className="absolute -right-96" htmlFor="email-or-phone">Email or Phone Number</label>
            <input
              className="border-b border-b-dark outline-none text-secondaryGray placeholder:text-secondaryGray py-2"
              type="email"
              id="email-or-phone"
              required
              placeholder="Email or Phone Number"
            />

            <label className="absolute -right-96" htmlFor="password">Password</label>
            <input
              className="border-b border-b-dark outline-none text-secondaryGray placeholder:text-secondaryGray py-2"
              type="password"
              id="password"
              required
              placeholder="Password"
            />

            <button type="submit" className="w-full bg-primaryRed text-white h-bg-red py-4 font-medium rounded-md">Create An Account</button>
          </form>

          <button className="border border-secondaryGray py-4 rounded-md w-full font-semibold h-text-red flex items-center justify-center gap-3">
            <img src="images/logo/Icon-Google.png" alt="Google icon" className="h-5 w-5"/> 
            <span>Sign up with Google</span>
          </button>

          <p className="flex items-center justify-center gap-3 text-secondaryGray">
            <span>Already have an account?</span>
            <Link to='/Exclusive-React/login' className="font-semibold underline underline-offset-4 h-text-red">Log in</Link>
          </p>
        </section>
      </div>
      <div className="side-img absolute top-0 left-0 h-full -z-10 right-0 sm:right-1/3 lg:right-1/2">
        <img src="images/logo/Side Image.png" alt="" className="h-full w-full"/>
      </div>
    </main>
  )

};
