import React from 'react';

export const ControlledOnBoardingFlow =({children, onFinish, currentIndex, onNext}) => {
  // const [onBoardingData, setOnBoardingData] = useState({});
  // const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = stepData => {
    onNext(stepData);
  }
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {goToNext});
  }
  return currentChild;
}