// Example 3: HOC for Adding Logging

// An HOC that logs props changes to the console:
// HOC Definition

// jsx

import React from 'react';

const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogging;

// Using the HOC

// jsx

import React from 'react';
import withLogging from './withLogging';

const UserProfile = ({ user }) => {
  return <div>User: {user.name}</div>;
};

const LoggedUserProfile = withLogging(UserProfile);

function App() {
  return (
    <div>
      <LoggedUserProfile user={{ name: 'John Doe' }} />
    </div>
  );
}

export default App;

// Explanation:

//     HOC Definition: withLogging logs the props received by the WrappedComponent and then renders it with the same props.
//     Usage: UserProfile is wrapped by withLogging to create LoggedUserProfile. Every time LoggedUserProfile receives new props, those props are logged to the console.