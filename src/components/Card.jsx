import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-violet-50 p-4 rounded shadow shadow-violet-100 hover:shadow-lg hover:shadow-violet-100 hover:scale-105 transition ease-in-out cursor-pointer border border-violet-200 w-72">
        <img src={props.image} alt="" className="bg-red-100 rounded h-72 w-full object-cover" />
        <div className="flex flex-col gap-1 justify-between mt-4">
            <h1 className="font-medium text-lg">{props.name}</h1>
            <p className="font-semibold text-xl">&#8377; {props.price}</p>
        </div>
    </div>
  )
}

export default Card