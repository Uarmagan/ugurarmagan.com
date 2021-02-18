import React from 'react';

export default function Container({ children }) {
  return (
    <div className="px-4 mx-auto mb-10 max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
