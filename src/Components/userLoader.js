import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { users } from '../Lists/lists';
export const UserLoader = ({userId, children}) => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`)
      .catch(function(error){
        if(error.response){
          let subResponse = users.filter(user => user.id === userId);
          // console.log(subResponse)
          setUser(subResponse[0]);
    
        }
      })
      // setUser(subResponse);
    })();
  }, [userId])
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