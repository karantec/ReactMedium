import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const DebouncedSearchBar = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [results, setResults] = useState([]);

  // Function to fetch posts from the JSONPlaceholder API
  const fetchPosts = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]); // Reset results if search term is empty
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();

      // Filter posts by title based on the search term
      const filteredResults = data.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Effect to handle debouncing
  useEffect(() => {
    // Debounce the search API call
    const handler = _.debounce(() => {
      setDebouncedQuery(query);
    }, 300);

    handler(); // Call the debounced function

    // Cleanup function to cancel the debounced function on unmount or when query changes
    return () => {
      handler.cancel();
    };
  }, [query]);

  // Effect to fetch results when the debounced query changes
  useEffect(() => {
    fetchPosts(debouncedQuery);
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update the input state
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts by title..."
        onChange={handleInputChange}
        value={query}
      />
      <ul>
        {results.map(post => (
          <li key={post.id}>{post.title}</li> // Displaying post titles
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearchBar;
