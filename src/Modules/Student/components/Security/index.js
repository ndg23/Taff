import React from 'react'

export default function StudentSecurity() {
  return (
    <div>
      
      <div className="bg-white shadow-sm  rounded">
        <div className="flex-col p-3">
          <div className='flex'>
            <h2 className="text-xl font-bold">Securité</h2>

            <button className="btn btn-light bg-gray-200 btn-sm ml-auto font-bold">
              Modifier{' '}
            </button>
          </div>
          <div className="flex border-b my-2 mx-3 flex-wrap justify-between">
            <span>Mot de passe</span>
            <p>*********</p>
          </div>
        </div>
      </div>
    </div>
  )
}
