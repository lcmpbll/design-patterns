export const LargePersonListItem =({person}) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    //using a react fragment, so parent component can deterimine own styline
    <>
      <h3> Name: {name}</h3>
      <p>Age: {age} </p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}> {hobby}</li>)}
      </ul>
    </>
  );
}