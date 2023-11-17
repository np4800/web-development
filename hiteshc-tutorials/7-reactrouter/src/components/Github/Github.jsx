import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'  >
    <img src={'https://images.bauerhosting.com/empire/2022/07/oppenheimer-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80'} width={300} borderRadius="50%" alt="Github" />
        Github Followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}