import React from 'react'

export default function ItemList() {
  return (
    <>
      <div className="bg-white flex gap-1 items-center my-3 p-4">
        <div>
          <img className='w-24 h-24 border rounded' src="http://www.sencampus.com/app/uploads/UCAD_avatar_1506544367-550x550.jpg" alt="logo" />
        </div>
        <div className="flex-col">
          <h2 className="text-xl font-bold lead">UCAD</h2>
          <p className="text-muted text-sm">Universite Cheikh Anta Diop</p>
          <p>Dakar</p>
          <p>*********</p>
        </div>
      </div>
    </>
  )
}
