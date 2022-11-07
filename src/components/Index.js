import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Posts from './Posts'
import Pagination from './Pagination';

export default function Index() {
  const [posts,setPosts]=useState([]);
  const [loading , setLoading] =useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage] =useState(10);
  useEffect(()=>{
    const fetchPosts=async () => {
      setLoading(true);
      const result =await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);

  console.log('posts ',posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost -postsPerPage;
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate=(number)=>{
    setCurrentPage(number);
  }

  return (
    <div className='container mt-3'>
    <h1 className='text-info mb-3'>All Posts</h1>
    <Posts posts={currentPosts} loading={loading}/>
    <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
    </div>
  )
}


