import React from 'react';

function Download() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 ">
      <div
        className="scrollbar-width: thin overflow-hidden overflow-x-scroll overflow-y-scroll md:border"
        style={
          ({ maxWidth: window.innerWidth - 10 },
          { height: window.innerHeight - 180 })
        }
      >
        <div className="bg-white p-6"></div>
      </div>
    </div>
  );
}

export default Download;
