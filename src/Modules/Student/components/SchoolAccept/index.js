import React from 'react'
import ItemSchoolDemand from './item'

export default function SchoolAccept() {
  return (
    <div>
      <div className="bg-white p-3 items-center gap-1 my-4 shadow-sm border rounded flex">
        <div className="flex-col w-full  p-3">
          <div className='flex'>
            <h2 className="text-xl font-bold text-green-500">Demandes acceptees</h2>
          </div>
          <ItemSchoolDemand />
        </div>
      </div>
    </div>
  )
}
