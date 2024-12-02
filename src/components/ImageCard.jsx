import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageCard = (props) => {
    const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className="w-64 h-64">
        {isLoading && <Skeleton width={"100%"} height={"100%"} />}
        <img className="w-64 h-64 object-cover hover:shadow-md shadow-2xl rounded-lg hover:scale-95 transition ease-linear" src={props.data} alt="Random Image" loading='lazy' onLoad={() => setIsLoading(false)} />
    </div>
  )
}

export default ImageCard