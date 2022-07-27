import React from 'react'
import { FaUserPlus,FaUserFriends,FaPlus } from 'react-icons/fa'
export default function NewStudent() {
  return (
    <div>
      <div className="bg-white mb-2 flex gap-3 items-center justify-center  rounded p-2">
        <div className="flex-col text-center">
          <button className="border rounded-full w-14 h-14 mx-auto">
            <FaUserPlus size={30} className="mx-auto"/>
          </button>
          <p className='text-center text-sm'>Acceptes</p>
        </div>
        <div className="flex-col text-center">
          <button className="border rounded-full w-14 h-14 mx-auto">
            <FaUserFriends size={30} className="mx-auto"/>
          </button>
          <p className='text-center text-sm'>En attente</p>
        </div>
        <div className="flex-col text-center">
          <button className="border rounded-full w-14 h-14 mx-auto">
            <FaPlus size={30} className="mx-auto"/>
          </button>
          <p className='text-center text-sm'>Publications</p>
        </div>
      </div>
    </div>
  )
}
