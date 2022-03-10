import React from 'react';

function Text({ text, color, fontSize }) {
  return <p style={{ color: color, fontSize: fontSize }}>{text}</p>;
}

export default Text;
