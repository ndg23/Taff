import React from 'react'

export default function InfoScholar() {
  return (
    <div>
      <div className="bg-white my-4 shadow-sm order rounded">
        <div className="flex-col p-3">
          <div className="flex">
            <h2 className="text-xl font-bold">Scolarité</h2>

            <button className="btn btn-light bg-gray-200 btn-sm ml-auto font-bold">
              Modifier{' '}
            </button>
          </div>
          <div className="flex border-b my-2 mx-3 flex-wrap justify-between">
            <span>Niveau</span>
            <p>ndg</p>
          </div>
          <div className="flex border-b my-2 mx-3 flex-wrap justify-between">
            <span>Diplome</span>
            <p>ndg</p>
          </div>

          <div className="flex border-b my-2 mx-3 flex-wrap justify-between">
            <span>Etablissement</span>
            <p>ndg</p>
          </div>
        </div>
      </div>
    </div>
  )
}
