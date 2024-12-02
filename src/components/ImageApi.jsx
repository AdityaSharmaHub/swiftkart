import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'

const ImageApi = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
        const data = response.data

        setData(data)
        setIsLoading(false)
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <>
        <div className="p-12">
            <h1 className="text-3xl font-semibold mb-10">Handling data from API</h1>
            <h2 className="font-semibold text-xl text-center text-neutral-800">
                {isLoading ? "Loading..." : ""}
            </h2>
            <div className="flex flex-wrap gap-8 my-12">
                {
                    data.map((elem, i) => (
                        <ImageCard key={i} data={elem.download_url} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ImageApi