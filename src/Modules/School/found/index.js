import React from 'react'
import Comments from '../components/Comments'
import Dashboard from '../components/Dashboard'
import InfoSchool from '../components/InfoSchool'
import './found.css'
export default function Found() {
  return (
    <>
      <div className="row container m-2 justfy-center">
        <div className="col-lg-7">
          <img
            className="object-covr h-60 w-full"
            src="https://img.freepik.com/vecteurs-libre/interieur-du-couloir-ecole-portes-casiers_107791-1269.jpg?w=2000"
            alt="head"
          />
          <Dashboard />
          <div className="flex ml-aut gap-2 mt-2 container">
            <button className="btn btn-light btn-sm  ml-auto text-center">
              Signaler
            </button>
            <button className="btn btn_demand font-bold  btn-md text-center">
              Demande d&apos;Inscription
            </button>
            <button className="btn btn-danger font-bold d-none btn-sm text-center">
              Annuler inscription
            </button>
          </div>
        </div>
        <div className="col-lg-5 mt-5">
          <Comments />
        </div>{' '}
        <div className="col-lg-7 mt-5">
          <InfoSchool />
        </div>
      </div>
    </>
  )
}
