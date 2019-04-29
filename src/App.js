import React from 'react';

function App() {
  const profiles = [
    { name: 'Taro', age: 30 },
    { name: 'Yooooo', age: 3 },
    { name: 'Woooooo' }
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
}

const User = props => {
  return (
    <div>
      My name is {props.name}, and {props.age} years old.
    </div>
  );
};

User.defaultProps = {
  age: 50
};

export default App;
