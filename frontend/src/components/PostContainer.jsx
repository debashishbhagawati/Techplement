import React, { useState, useEffect, useRef } from 'react';
import { IoAddSharp } from "react-icons/io5";


const PostContainer = () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const fetchPosts = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.quotable.io/quotes?page=${page}`)
      .then(response => response.json())
      setPosts(prevPosts => [...prevPosts,...response.results]);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <>
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 my-2 border border-gray-200 rounded m-2">
            <div className="author-follow flex mb-1 justify-between gap-10 items-center">
                <h2 className="font-bold">{post.author}</h2>
                {/* <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>Follow
                <IoAddSharp size={20}/>
                </button> */}
            </div>
            <p>{post.content}</p>
            <div className="tags flex justify-end mt-1">
                {post.tags.map((tag, index) => (
                    <span key={index} className="mr-2 text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-lg">{tag}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={loader} className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full'/>
    </div>
    </>
  );
};

export default PostContainer;
