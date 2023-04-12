import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import { people, products } from "./Lists/lists"
import React from 'react';
import { SmallPersonListItem } from "./People/SmallPersonListItem";
import { LargePersonListItem } from "./People/LargePersonListItem";
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
      <RegularList items={people} resourceName='person' itemComponent={SmallPersonListItem}/>
      <RegularList  items={people} resourceName='person' itemComponent={LargePersonListItem}/>
    </SplitScreen>
  );
}

export default App;
