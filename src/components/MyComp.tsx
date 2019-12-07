import React from 'react';

// interface MyCompInterface {
//   name: string;
// }

type MyCompType = {
  name: string,
  gender: "M" | "F" | "X",
  isMarried?: boolean,
  flexibleField?: any,
  [key:string]: any
}

type Person = {
  firstName: string,
  lastName: string
}

const person:Person = {
  firstName: 'john',
  lastName: 'doe'
}

function isOld(age:number) :boolean {
  return age > 60;
}

function MyComp({name, gender, flexibleField, whatever}:MyCompType) {
  return (
    <>
      <div>{name}</div>
      <div>{gender}</div>
      <div>{flexibleField}</div>
      <div>{whatever}</div>
    </>
  )
}

export default MyComp;
