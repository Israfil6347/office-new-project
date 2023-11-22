import React from 'react';

function ErrorPage() {
  return (
    <div>
      <div className="text-left md:text-justify lg:text-justify ">
        <div className="content  px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
          <div className="animate-backInRight text-center">
            <h1 className=" text-9xl font-extrabold">404</h1>
            <p>Resource not found</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
