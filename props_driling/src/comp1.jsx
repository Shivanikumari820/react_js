// import React from 'react';
// import Comp2 from './comp2';
// import { useContext } from 'react';

// const Comp1 = ({ children }) => {
//   return (
//     <>
//       <h1>Welcome to Comp-1</h1>
//       {children}
//       <Comp2 />
//     </>
//   );
// };

// export default Comp1;

//jb bhar usercontext bna denge tb ye --
import React from 'react';
import Comp2 from './comp2';

const Comp1 = ({ children }) => {
  return (
    <>
      <h1>Welcome to Comp-1</h1>
      <Comp2 />
    </>
  );
};

export default Comp1;

