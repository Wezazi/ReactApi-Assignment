import { useState, useEffect } from 'react'
import "./RandomUser.css";


function RandomUser() {
  const [person, setPerson] = useState(null);
  const [generated, setGenerated] = useState(false);

 

  /*https://apipheny.io/free-api/ */

  async function fetchData() {
      let url = "https://randomuser.me/api/";

      try{
          let response = await fetch(url, {});

          if (!response.ok) { 
              throw new Error(`Response status: ${response.status}`); 
          }

          const object = await response.json();

          console.log(object.results[0]); 
          setPerson(object.results[0]);

      }
      catch (error){
          console.log(`Failed to fetch data: ${error}`); 
      }
  }

  function generatePerson(){
    fetchData()
  }

  useEffect(() => {
    if (person) {
      setGenerated(true)
    }
    else{
      setGenerated(false)
    }
  }, [person])

  return (
    <>

      

      <div className='buttonContainer'>
        <button onClick={generatePerson}>Generate Random Person</button>
      </div>
      

      {generated &&(
        <div className='personContainer'>
          <p>Name: {person.name.title} {person.name.first} {person.name.last}</p>
          <p>Gender: {person.gender}</p>
          <p>Email: {person.email}</p>
          <p>Phone Number: {person.cell}</p>
          <p>Username: {person.login.username}</p>
          <p>Password: {person.login.password}</p>
          <img src={person.picture.large}></img>

        </div>
      )}
      
      
    </>
  )
}

export default RandomUser
