import React, {useState} from 'react';
import { ControlledModal } from './Control/ControlledModal';
import { UncontrolledOnBoardingFlow } from './Uncontrolled/uncontrolledOnboardingFlow';
import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./Lists";
import { people, products } from "./Lists/lists"
import { UncontrolledForm } from "./Uncontrolled/uncontrolledForm";
import { ControlledOnBoardingFlow } from './Control/ControlledOnBoardingFlow';
import { ControlledForm } from "./Control/ControlledForm";

const RightHandComponent = ({name}) => {
  return(
    <h1 style={{backgroundColor: 'green'}}>{name}</h1>
  );
}
const LeftHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}


const StepOne = ({goToNext}) => <> <h1>Step One</h1><button onClick={() => goToNext({name: 'jonny whalker'})}>next</button></>
const StepTwo = ({goToNext}) => <><h1>Step Two</h1> <button onClick={() => goToNext({age: 30})}>next</button></>
const StepThree = ({goToNext}) => <><h1>Step Three </h1> <button onClick={() => goToNext({hairColor: 'Red'})}>next</button> </>
const StepFour = ({goToNext}) => <><h1>Congratulations</h1> <button onClick={() => goToNext({})}>Next</button></>
function App() {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ shouldShowModal, setShouldShowModal] = useState(false);
  const onNext = (stepData) => {
    setOnBoardingData({...onBoardingData, ...stepData});
    setCurrentIndex(currentIndex + 1)
  }
  return (
    <>
      <SplitScreen
      
      leftWeight={1}
      rightWeight={3}
      >
        <UncontrolledOnBoardingFlow onFinish={data => {console.log(data); alert('onboarding Complete')}}>
          <StepOne/>
          <StepTwo/>
          <StepThree/>
        </UncontrolledOnBoardingFlow>
        <ControlledOnBoardingFlow currentIndex={currentIndex} onNext={onNext}>
          <StepOne/>
          <StepTwo/>
          {onBoardingData.age >= 100 && <StepFour/> }
          
          <StepThree/>
        </ControlledOnBoardingFlow>
      </SplitScreen>
      <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
        setShouldShowModal(false);
      }}>
        <RightHandComponent name={'liam'}/>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        show modal
      </button>
    </> 
  );
}

export default App;
