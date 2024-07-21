import React from 'react';
import { useLoaderData } from 'react-router-dom';
function Github  ()  {
    const data = useLoaderData()
    return (
      <div class="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Follower : {data.followers}
        <img src="https://avatars.githubusercontent.com/u/156568758?v=4" alt="ng" />
      </div>
    )
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/faizanmansuri07")
    return response.json();
}