import { useState } from 'react';
import UserContext from './UserContext';
import Comp1 from './comp1';

const App = () => {
  const [user, setUser] = useState("Shivani");

  return (
    <UserContext.Provider value={user}>
      <h1>Welcome {user}</h1>
      <Comp1 />
    </UserContext.Provider>
  );
};

export default App;
