import React from 'react'
import { Link } from 'react-router'

export default function Error() {
  return (
    <> <section className="relative z-10  py-[120px] text-black">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight ">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg ">
                  The page you are looking for it maybe deleted
                </p>
                <Link to={'/'}><button
                  href="javascript:void(0)"
                  className="inline-block rounded-lg border border-blue-500 px-8 py-3 text-center text-base font-semibold  transition hover:bg-white hover:text-primary"
                >
                  Go To Home
                </button></Link>
                
              </div>
            </div>
          </div>
        </div>

       
      </section></>
  )
}
