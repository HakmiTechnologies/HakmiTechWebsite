import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
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
          console.log(jsonResponse);
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'linear-gradient(0deg, #026e9f 0%, #020202 100%)',
      }}
    >
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Latest Blogs</h1>
        {error && <pre className="text-red-500">{error}</pre>}
        <div className="flex flex-wrap -mx-4">
          {blogs.slice(0, 3).map((blog) => (
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
        <div className="flex justify-center mt-8">
          <Link to="/all-blogs">
    <button className="bg-slate-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              Explore All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;