import React from "react";
import { useSelector } from "react-redux";


const Greeting = () => {
const { isLoading, greeting, error }= useSelector((state) => state.greeting );

if (isLoading) {
  return <div>Loading .......</div>
}

if(error) {
  return <div>Error fetching date......</div>
}

return <div>{greeting.content}</div>
     
}

export default Greeting;