import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full border border-black py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-amber-700 hover:text-amber-800">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full border border-black py-1.5 text-gray-900  placeholder:text-gray-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center px-3 py-1.5 text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black"
                  >
                    Log In
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Do not have an account?{' '}
                <a href="/signUp" className="font-semibold text-amber-700 hover:text-amber-800">
                  Sign up here!
                </a>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              alt="Leather Shoe Showcase"
              src="/Hero-2.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page