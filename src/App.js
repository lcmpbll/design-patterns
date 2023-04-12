import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import { people, products } from "./Lists/lists"
import React from 'react';
const RightHandComponent = ({name}) => {
  return(
    <h1 style={{backgroundColor: 'green'}}>{name}</h1>
  );
}
const LeftHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}

function App() {
  return (
    <SplitScreen
   
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent message={'hello'}/>
      <RightHandComponent name={'Liam'}/>
    </SplitScreen>
  );
}

export default App;
