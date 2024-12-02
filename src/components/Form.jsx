import React, { useState } from 'react'

const Form = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted!!!")
        console.log("First name: " + fname + "\n" + "Last name: " + lname)

        setFname("")
        setLname("")
    }

  return (
    <>
        <div className="px-12 py-12">
            <h2 className="font-semibold text-3xl mb-12">Billing Details</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="fname" className="text-xl">First name:</label><br/>
                <input 
                type="text" 
                id="fname" 
                name="fname" 
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
                placeholder="Rahul"
                className="w-1/2 mt-2 border border-gray-400 rounded-md px-4 py-3 text-xl font-semibold"
                /><br/><br/>
                <label htmlFor="lname" className="text-xl">Last name:</label><br/>
                <input 
                type="text" 
                id="lname" 
                name="lname" 
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
                placeholder="Kumar"
                className="w-1/2 mt-2 border border-gray-400 rounded-md px-4 py-3 text-xl font-semibold"
                /><br/><br/>
                <button
                className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-4 py-3 text-xl rounded border border-violet-600 active:scale-95"
                >Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form