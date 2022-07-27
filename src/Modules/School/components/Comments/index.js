import React from 'react'
import ItemComment from '../ItemComments'
import FormComment from './form.comment'

export default function Comments() {
  return (
    <>
      <div className="bg-white mb-2 border shadow-sm rounded p-2">
        <div className="flex align-items-center flex-wrap">
          <h2 className="m-2 text-xl text-green-600 fnt-bold">
            Commentaires.
          </h2>
          <button className="btn btn-light bg-gray-200 btn-sm ml-auto font-bold">
            Voir plus
          </button>
        </div>
       <ItemComment/>
      </div>
      <FormComment/>
    </>
  )
}
