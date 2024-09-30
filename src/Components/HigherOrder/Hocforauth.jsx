// Example 2: HOC for Authentication

// Here's an HOC that checks if a user is authenticated before rendering a component:
// HOC Definition

// jsx

import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = // logic to determine authentication

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

Using the HOC

jsx

import React from 'react';
import withAuth from './withAuth';

const ProtectedPage = () => {
  return <div>Protected Content</div>;
};

const AuthenticatedPage = withAuth(ProtectedPage);

function App() {
  return (
    <div>
      <AuthenticatedPage />
    </div>
  );
}

export default App;

// Explanation:

//     HOC Definition: withAuth wraps the WrappedComponent and checks if the user is authenticated. If not, it prompts the user to log in; otherwise, it renders the WrappedComponent.
//     Usage: ProtectedPage is wrapped by withAuth to create AuthenticatedPage. This ensures that only authenticated users can see the content.