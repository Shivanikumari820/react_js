// import React, { useState } from 'react';
// import UserContext from './UserContext';
// import Comp1 from './comp1';

// const App = () => {
//   const [user, setUser] = useState("Shivani");

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       <h1>Welcome My App: {user}</h1>
//       <button onClick={() => setUser("Simran")}>Click here</button>
//       <Comp1 />
//     </UserContext.Provider>
//   );
// };

// export default App;



// import React from 'react';
// import Comp1 from './comp1';

// const App = () => {
//   return (
//     <>
//       <h1>Welcome to App</h1>
//       <Comp1>
//         <h3>Hi, this is Shivani</h3>
//       </Comp1>
//     </>
//   );
// };

// export default App;


import React from 'react';
import Comp1 from './comp1';

const App = () => {
  return (
    <>
      <h1>Welcome to App</h1>
      <Comp1>
        <h3>Hi, this is Shivani</h3>
      </Comp1>
    </>
  );
};

export default App;


