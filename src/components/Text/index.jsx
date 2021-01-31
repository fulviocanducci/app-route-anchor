import React from 'react';

function Text({ total }) {
  return (
    <div>
      {Array.from(Array(total).keys()).map((item) => {
        return <div>{item + 1}</div>;
      })}
    </div>
  );
}
export default Text;
