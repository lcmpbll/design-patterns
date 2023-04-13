import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import { people, products } from "./Lists/lists"
import React from 'react';
import { printProps } from "./HOC/PrintProps";
import { LargePersonListItem } from "./People/LargePersonListItem";
import { withUser } from "./HOC/withUser";
const RightHandComponent = ({name}) => {
  return(
    <h1 style={{backgroundColor: 'green'}}>{name}</h1>
  );
}
const LeftHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}
const userInfoWithLoader = withUser(LargePersonListItem, '123');
//<userInfoWithLoader/>
const UserInfoWrapped = printProps(LargePersonListItem);

function App() {
  return (
    <SplitScreen
   
      leftWeight={1}
      rightWeight={3}
    >
      <UserInfoWrapped a={1} b={"hello"} c={{name: 'liam'}}/>
      
      <RightHandComponent name={'Liam'}/>
    </SplitScreen>
  );
}

export default App;
