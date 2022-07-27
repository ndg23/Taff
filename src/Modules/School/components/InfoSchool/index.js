import React from 'react'

export default function InfoSchool() {
  return (
    <div>
      <div className="bg-white my-2 border shadow-sm rounded p-3">
        <div className="flex align-items-center flex-wrap">
          <h2 className="m-2 text-xl font-bold">
            Informations de l&apos;Ecole
          </h2>

          <button className="btn btn-light bg-gray-200 btn-sm ml-auto font-bold">
Modifier          </button>
        </div>
        <div className="flex-col text-start leading-none m-1 pb-3 border-b">
          <h2 className="text-black tex-xl ext-muted">Nom</h2>
          <p className="text-muted ml-2 text-xs">ndong allogho</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black text ext-muted">Sigle</h2>
          <p className="text-muted ml-2 text-xs">marvinndg242@gmail.com</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black tex-xl ext-muted">Adress</h2>
          <p className="text-muted ml-2 text-xs">777494912</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black tex-xl ext-muted">Langue</h2>
          <p className="text-muted ml-2 text-xs">777494912</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black tex-xl ext-muted">Type de formation</h2>
          <p className="text-muted ml-2 text-xs">777494912</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black tex-xl ext-muted">
            Type d&apos;inscription
          </h2>
          <p className="text-muted ml-2 text-xs">777494912</p>
        </div>
      </div>
    </div>
  )
}
