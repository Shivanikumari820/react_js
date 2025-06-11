import React from 'react';
import Comp2 from './comp2';

const Comp1 = ({ user }) => {
  return (
    <>
      <h1>Component-1</h1>
      <Comp2 user={user} />
    </>
  );
};

export default Comp1;
