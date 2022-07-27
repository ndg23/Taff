import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className='row container'>

      <div className="mt-10 col-lg-4 bg-white rounded-2xl shadow-sm border p-4 mx-auto">
        <h3 className="text-centr text-4xl text-gray-400 font-bold text-black">
          Se connecter
        </h3>
        <p className="text-centr text-sm fond-bold">
          Veuillez vous connecter pour continuer.
        </p>

        <form className="p-3">
          <div className="form-grop">
            <label
              htmlFor=""
              className="mt-3 mb-0 font-bold text-sm text-gray-700"
            >
              Email ou Tel
            </label>
            <input
              type="text"
              placeholder="E-mail..."
              className="focus:shadow-none w-full focus:border-red-400 form-control"
            />
          </div>
          <div className="form-grou mt-0">
            <label
              htmlFor=""
              className="mt-3 mb-0 font-bold text-sm text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Mot de passe..."
              className="focus:shadow-none  focus:border-red-400 form-control"
            />
          </div>
          <div className='text-sm my-3 ml-auto d-inline float-right'>

          <Link to={'/'} className="mt-10 text-sm">
            Mot de passe oublie ?
          </Link>
          </div>
          <div>
            <button type='button' className="font-bold btn mt-3 btn-block btn-info bg-info text-white">
              Se connecter
            </button>
          </div>

          <div className="flex mt-3 flex-col justify-center align-items-center">
            <h5 className="text-muted text-sm">Vous n'avez pas de compte ?</h5>
            <a href="http://" className="text-info text-sm">
              Ouvrir un compte
            </a>
          </div>
        </form>
      </div>

      </div>
    </div>
  )
}

