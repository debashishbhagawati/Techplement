import React from 'react'
import AuthorSearch from './AuthorSearch.jsx';

const RightSidebar = () => {
  return (
    <div className = 'w-[25%] border border-black p-5 border-r-4  rounded-lg'>
      <AuthorSearch/>
    </div>
  )
}

export default RightSidebar
