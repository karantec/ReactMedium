import React, { forwardRef } from 'react';

// Define a custom input component that uses forwardRef
const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function ParentComponent() {
  // Create a ref in the parent component
  const inputRef = React.useRef(null);

  const focusInput = () => {
    // Access the input DOM element directly via the ref and focus it
    inputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ParentComponent;
