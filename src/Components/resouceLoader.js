import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { users, products } from '../Lists/lists';

export const ResourceLoader = ({resource, resourceName, resourceUrl, children}) => {
  const [item, setItem ] = useState(null);
  let data = null;
  if(resourceName === 'user'){
    data = users;
  } else {
    data = products;
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${resourceUrl}`)
      .catch(function(error){
        if(error.response){
          let subResponse = data.filter(item => item[resourceUrl] == resource);
          // console.log(subResponse)
          setItem(subResponse[0]);
          
        }
      })
      // setUser(subResponse);
    })();
  }, [resourceUrl])
  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {[resourceName] : item})
        }
        return child;
      })}
    </>
  )
}