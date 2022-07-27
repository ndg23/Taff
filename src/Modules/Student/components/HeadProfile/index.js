import React from 'react'

export default function HeadProfile() {
  return (
    <div>
      <img
        className="object-covr h-60 w-full"
        src="https://img.freepik.com/vecteurs-libre/interieur-du-couloir-ecole-portes-casiers_107791-1269.jpg?w=2000"
        alt="head"
      />
      <div className="bg-white p-3 items-center gap-1  shadow-sm border mb-3 rounded-b-3xl flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
          alt="logoschool"
          className="w-24 border rounded-full h-24"
        />
        <div className="flex-col leading-none">
          <h2 className='text-2xl font-bold'>Nom</h2>
          <p>Tel</p>
          <p>classe</p>
        </div>
      </div>
    </div>
  )
}
