import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog", {
          method: "GET",
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setBlogs(jsonResponse);
        } else {
          setError(`Error: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-12">All Blogs</h1>
      {error && <pre className="text-red-500">{error}</pre>}
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src={`data:image/jpeg;base64,${blog.fileData}`}
                alt={blog.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{blog.title}</h2>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <Link to={`/blog/${blog.id}`}>
                  <button className="bg-slate-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                    Read Complete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;