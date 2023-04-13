import React from 'react';
import { withEditableUser } from '../HOC/WithEditAbleUser';

export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser}) => {
  const {name, age, hairColor} = user || {};
  return user ? (
    <>
    <label>Name: </label>
    <input value={name} onChageUser={e => onChangeUser({name: e.target.value})} />
    <label>Age: </label>
    <input value={age} onChageUser={e => onChangeUser({age: e.target.value})} />
    <label>Name: </label>
    <input value={hairColor} onChageUser={e => onChangeUser({hairColor: e.target.value})} />
      <button onClick={onResetUser}>Reset changes</button> 
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ): <h1>loading</h1>
} , "123")

// you can import directly to the app or component it is being used in.