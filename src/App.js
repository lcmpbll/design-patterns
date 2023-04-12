import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import {SmallPersonListItem} from './People/SmallPersonListItem';
import { LargePersonListItem } from "./People/LargePersonListItem";
import { people, products } from "./Lists/lists"
import { Modal } from "./Modals";
import React from 'react';
const RightHandComponent = ({name}) => {
  return (
    <h1>{name}</h1>
  );
}

//counld rename to large product details, to demo that it's not just for lists.
function App() {
  return (
    <>
    <SplitScreen
   
      leftWeight={1}
      rightWeight={3}
    >
      <RegularList items={people} resourceName='person' itemComponent={SmallPersonListItem}/>
      <RightHandComponent name={'Liam'}/>
    </SplitScreen>
    <Modal>
      <LargePersonListItem person={people[0]}/>
    </Modal>
    </>
  );
}

export default App;
