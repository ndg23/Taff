import React from 'react'

export default function InfoUser() {
  return (
    <>
      <div className="bg-white my-10 border shadow-sm rounded-2xl p-2">
        <div className="flex justify-center align-items-center">
          <h2 className="m-2 text-xl font-bold">Informations de connexion</h2>
          <a
            href="http://"
            className="ml-auto text-gray-500 text-sm bg-light d-inline p-1 rounded inline"
          >
            Modifier
          </a>
        </div>
        <div className="flex-col leading-none m-1 pb-3 border-b">
          <h2 className="text-black tex-xl ext-muted">Nom</h2>
          <p className="text-muted ml-2 text-xs">ndong allogho</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black text ext-muted">Email</h2>
          <p className="text-muted ml-2 text-xs">marvinndg242@gmail.com</p>
        </div>

        <div className="flex-col py-2 m-1 leading-none border-b">
          <h2 className="text-black tex-xl ext-muted">Telephone</h2>
          <p className="text-muted ml-2 text-xs">777494912</p>
        </div>
      </div>
    </>
  )
}
