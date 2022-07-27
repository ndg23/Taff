import React from 'react'

export default function ItemComment() {
  return (
    <>
      <div className="mt-3 flex align-items-center content-comment flex-wrap">
        <div className="rounded-r-2xl p-1 font-weight-normal rounded-2xl bg-light leading-none justify-center items-center ">
            <img
              src="https://wpcom.files.wordpress.com/2020/05/icon-60-user403x.png"
              className=" w-10 h-10 border rounded-full"
              alt="user"
            />{' '}
          
          <div>
            <p className="m-2 text-xs mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              aut provident dicta voluptas corrupti eos blanditiis, deleniti
              necessitatibus aspernatur hic libero dolore tenetur, quam harum
              itaque nemo id ut velit!{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
