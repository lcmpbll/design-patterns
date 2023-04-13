import React, {useState, useEffect} from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState('');
  // controlled forms allow for validation while the user is typing
  useEffect(() => {
    if(name.length < 2){
      console.log('Name must be two or more characters')
    }
  }, [name, age, hairColor])
  return (
    <form>
      <input name='name' type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
      <input name='age' type='text' placeholder='Age' value={age} onChange={e => setAge(Number(e.target.value))} />
      <input name='hairColor' type='text' placeholder='Hair Color' value={hairColor} onChange={e => setHairColor(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}