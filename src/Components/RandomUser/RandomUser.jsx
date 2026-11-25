import { useState, useEffect } from 'react'
import "./RandomUser.css";


function RandomUser() {
 
  /*https://apipheny.io/free-api/ */

  async function fetchData() {
      let url = "https://randomuser.me/api/";

      try{
          let response = await fetch(url, {});

          if (!response.ok) { 
              throw new Error(`Response status: ${response.status}`); 
          }

          const object = await response.json();

          console.log(object); 
      }
      catch (error){
          console.log(`Failed to fetch data: ${error}`); 
      }
  }

  useEffect( () => {
      fetchData();
  }, []);

  return (
    <>
      <h2>Hello</h2>
      
    </>
  )
}

export default RandomUser
