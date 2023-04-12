import React from 'react';
export const UserInfo =({user}) => {

    const { name, age, hairColor, hobbies } = user || {};
    //using a react fragment, so parent component can deterimine own styline
    //Need default value while loading...
  
  return user? (
  
    <>
      <h3> Name: {name}</h3>
      <p>Age: {age} </p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}> {hobby}</li>)}
      </ul>
    </>
  ) : (
    <p>User loading</p>
  )
}