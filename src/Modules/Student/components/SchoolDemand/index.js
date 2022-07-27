import React from 'react'
import ItemSchoolDemand from './item'

export default function SchoolDemand() {
  return (
    <div>
      <div className="bg-white p-3 items-center gap-1 my-4 shadow-sm border rounded flex">
        <div className="flex-col p-3 w-full">
          <div className='flex'>
            <h2 className="text-xl font-bold">écoles demandes</h2>
          </div>
          <ItemSchoolDemand />
        </div>
      </div>
    </div>
  )
}
