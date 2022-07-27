import React from 'react'
import MainLayout from '../../../commons/components/Layouts'
import Navbar from '../../../commons/components/Navbar'

export default function SignupStudent() {
  return (
    <div>
      <div className="row container mx-auto">
        <div className="col-lg-4 mb-3 bg-white shadow-sm mx-auto rounded-xl border p-4">
          <div>
            <h2 className="text-2xl text-red-400 font-bold">
              Creer un compte apprenant
            </h2>
            <p className="text-sm">
              Pour continuer a profiter pleinement de nos services vous devez
              creer un compte
            </p>
            <hr />
          </div>
          <form className="">
            <div>
              <label htmlFor="" className="mb-0 text-gray mt-3 text-sm">
                Nom
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none  focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-0 text-gray mt-3 text-sm">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-0 text-gray mt-3 text-sm">
                Tel
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-0 text-gray mt-3 text-sm">
                Mot de passe
              </label>
              <input
                id="email-address"
                name="email"
                type="password"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <button className="font-bold btn my-4 btn-block text-center text-sm btn-info">
              Creer mon compte
            </button>
            
          </form>
          <div className='leading-none text-center'>
            <h3 className='text-sm'>Vous avez deja un compte ?</h3>
            <button className='btn border btn-link btn-sm '>Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

SignupStudent.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <Navbar />
      {page}
    </MainLayout>
  )
}
