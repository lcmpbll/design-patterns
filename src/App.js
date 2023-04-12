import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import { users, products } from "./Lists/lists";
// import { CurrentUserLoader } from "./Components/currentUserLoader";
import { UserLoader } from './Components/userLoader';
import {ResourceLoader} from './Components/resouceLoader'
import { DataSource } from './Components/dataSource'
import { UserInfo } from './Components/UserInfo';
import React from 'react';
import { ProductInfo } from "./Components/ProductInfo";
import axios from 'axios';
const RightHandComponent = ({name}) => {
  return(
    <h1 style={{backgroundColor: 'green'}}>{name}</h1>
  );
}
const LeftHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}
const getServerData = url => async () => {
  const response = await axios.get('/users/123');
  return response.data;
}
const getLocalStorageData = key => () => {
  return localStorage.getItem(key)
} 
const Text = ({message}) => {
  return <h1>{message}</h1>
}
function App() {
  return (
    <SplitScreen
   
      leftWeight={1}
      rightWeight={3}
    >
      {/* <ResourceLoader resourceUrl='id' resourceName="product" resource='666'>
        <ProductInfo />
      </ResourceLoader> */}
      <UserLoader userId='234'>
        <UserInfo/>
      </UserLoader>
      {/* <DataSource getDataFunc={getServerData('/users/123')} resourceName="user" >
        <UserInfo/>
      </DataSource> */}
      {/* local storage */}
      <DataSource getDataFunc={getLocalStorageData('message')} resourceName='message'>
        <Text/>
      </DataSource>
      {/* <RightHandComponent name={'Liam'}/> */}
    </SplitScreen>
  );
}

export default App;
