import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Update error state
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchData(); // Call the asynchronous function
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <div>Loading...</div>; // Render loading state
  if (error) return <div>Error: {error}</div>; // Render error state

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li> // Render fetched data
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
