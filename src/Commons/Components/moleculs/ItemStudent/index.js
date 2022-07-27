import React from 'react'

export default function ItemStudent() {
  return (
    <>
      <div className="flex bg-white w-full border p-2 items-center gap-2 ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
          className="rounded-4xl border w-20 h-20"
          alt=""
          srcset=""
        />
        <div className="flex-col">
          <h2>Nom</h2>
          <p>Niveau</p>
          <p>school</p>
          <p>tel</p>
        </div>
      </div>
    </>
  )
}
