import React from 'react';

function SubmitButton({ handleSubmit }) {
  return (
    <button style={{ backgroundColor: 'red' }} onClick={handleSubmit}>
      Submit
    </button>
  );
}

export default SubmitButton;
