import React from 'react'
import ItemList from '../components/ItemList'

export default function List() {
  return (
    <div>
      <div className="row flex-col">
        <div className="col-lg-8 mx-auto">
          <div className="bg-white shadow-sm fixed-top mt-20 border-t p-3 text-center">
            <p className="text- font-bold">France</p>
            <h3 className="text-5xl text-info">
              Resulat pour la filiere : <b>Droit</b>
            </h3>
          </div>
          <div className="pt-20 mt-20">
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  )
}
