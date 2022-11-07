import React from 'react'

function Pagination({postsPerPage,totalPosts,paginate}) {
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((i)=>{
    
          return <li key={i} className='page-item'>
            <a onClick={()=> paginate(i)} href="!#" className='page-link'>
              {i}
            </a>
          </li>

        })}
      </ul>
    </nav>
  )
}

export default Pagination