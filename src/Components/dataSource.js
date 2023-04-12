
import React, {useEffect, useState} from 'react';
import { users, products } from '../Lists/lists';
//get data funtion will return what ever the child component needs.
export const DataSource = ({getDataFunc = () => {}, resourceName, resourceUrl, children}) => {
  const [state, setState ] = useState(null);


  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
   
      
    })();
  }, [getDataFunc()])
  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {[resourceName] : state})
        }
        return child;
      })}
    </>
  )
}