import React, { useState, useEffect, useContext } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { AppContext } from "../context/AppContext.jsx";

const SelectedFeed = () => {
  const URL = "http://localhost:8000";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); 
  const { selectedAuthor } = useContext(AppContext);

  const fetchPosts = async () => {
    if (selectedAuthor) {
      setLoading(true); 
      try {
        const response = await fetch(`${URL}/author/quote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: selectedAuthor }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.message === 'Author not found') {
          setPosts([]);
          return;
        }

        setPosts(data.results);

      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedAuthor]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {posts.map((post, index) => (
            <div key={index} className="mb-4 p-4 my-2 border border-gray-200 rounded m-2">
              <div className="author-follow flex mb-1 justify-between gap-10 items-center">
                <h2 className="font-bold">{post.author}</h2>
                {/* <button className='bg-sky-400 rounded-xl px-3 py-1 text-white font-semibold text-sm flex gap-1 items-center'>
                  Follow
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
      )}
    </>
  );
};

export default SelectedFeed;
