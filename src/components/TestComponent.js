import { myToken } from "../mykey";
import React, { useState, useEffect } from 'react';



const TestComponent = () => {

  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${myToken}`,
  }

  


}















  return 
  <>
  
  </>
}

export default TestComponent;