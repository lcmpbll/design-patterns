import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { currentUser } from '../Lists/lists';
//npm install axios ?

//this is fairly restrictive: 
export const CurrentUserLoader = ({children}) => {
  const [user, setUser ] = useState(null);
  
  useEffect(() => {
    (async () => {
      // const response = await axios.get('/current-user')
      // if (!response.ok){
        let response = currentUser;
      // }
      setUser(response);
    })();
  }, [])
  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {user})
        }
        return child;
      })}
    </>
  )
}