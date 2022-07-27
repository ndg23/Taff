import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <div className="flex bg-white align-items-center rounded-b-2xl shadow-sm gap-1  p-2">
          <img
            width={'100px'}
            height={'100px'}
            className="p-2 bg-light rounded-full text-2xl border"
            alt="profil"
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'
            }
          />
          <div className="flex-col leading-none m-1 -3 ">
            <h2 className="text-black text-2xl font-bold">UCAD</h2>
            <p className="text-muted  text-sm">universite</p>
          </div>
        </div>
    </div>
  )
}
