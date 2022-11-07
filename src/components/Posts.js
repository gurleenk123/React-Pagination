import React from 'react'

export default function Posts({loading,posts}) {
    if(loading){
        return <h2>Loading...........</h2>
    }
  return (
    <ul className='list-group mb-4'>
        {posts.map((post)=>{
            return <li key ={post.id} className='list-group-item'>
                {post.title}
            </li>
        })}

    </ul>
  )
}
