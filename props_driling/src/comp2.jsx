// import React, { useContext } from "react";
// import UserContext from "./UserContext";

// const Comp2 = () => {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <>
//       <h1>Component-2: {user}</h1>
//       <button onClick={() => setUser("Suhani")}>Click here</button>
//     </>
//   );
// };

// export default Comp2;

// import React from 'react';

// const Comp2 = () => {
//   return <h2>This is Comp-2</h2>;
// };

// export default Comp2;


import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Comp2 = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Component-2: {user}</h1>
      <button onClick={() => setUser("Suhani")}>Click here</button>
    </>
  );
};

export default Comp2;

