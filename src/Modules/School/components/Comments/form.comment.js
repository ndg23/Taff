import React from 'react'

export default function FormComment() {
  return (
    <div>
      
      <form>
        <div className="flex-col mt-3">
          <textarea
            rows="2"
            cols="5"
            name="comment"
            className="py-2 form-control focus:shadow-none text-sm bg-gray-100  rounded"
            placeholder="Taper un commentaire..."
          ></textarea>
          <button
            className="button btn-sm mt-1 bg-white focus:bg-blue-400 focus:border-gray  float-end border hover:bg-gray-300 font-bold"
          >
            Commenter{' '}
          </button>
        </div>
      </form>
    </div>
  )
}
