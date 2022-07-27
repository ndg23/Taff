import React from 'react'
import './styles.css'
export default function Home() {
  return (
    <>
      <div className="mx-auto mt-24 align-items justify-center flex-col ">
        <h2 className="text-7xl text-gray-300 font-bold my-2 text-center">
          Trouvez une ecole
        </h2>
        <div>
          <select
            className="form-select mt-3 w-fit mx-auto "
            name="country"
          >
            <option value="France">France</option>
            <option value="cameroun">Cameroun</option>
            <option defaultValue={'true'}>Choisiez votre pays</option>
            <option value="gabon">Gabon</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center my-3">
          <input
            type="text"
            className="form-control form appearance-none py-3 text-xl focus:shadow-none focus:border-info-400  border-2 w-1/3"
            placeholder="Ecrivez votre filiere..."
          />

          <button className="btn btn-light  font-bold btn-lg">
            Trouver une ecole{' '}
          </button>
        </div>{' '}
      </div>
    </>
  )
}
