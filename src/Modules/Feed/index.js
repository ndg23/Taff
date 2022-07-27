import React from 'react'
import ItemDetail from './components/Item'
export default function Feed() {
  return (
    <>
      <div className="pt-10">
        <div className="flex-col mx-auto justify-center items-center container">
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
        </div>
      </div>
    </>
  )
}


