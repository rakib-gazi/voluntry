import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import axios from "axios";

const AllPosts = () => {
  const data = useLoaderData();
  const { darkTheme } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFilteredPosts = async () => {
      await axios
        .post("https://ph-assignment-11-server-pink.vercel.app/volunteerPosts", {
          title: search,
        })
        .then((res) => setPosts(res.data));
    };

    if (search !== "") {
      fetchFilteredPosts();
    } else {
      axios
        .get("https://ph-assignment-11-server-pink.vercel.app/volunteerPosts")
        .then((res) => setPosts(res.data));
    }
  }, [search]);
  return (
    <div className="container mx-auto px-4">
      <div className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
          <h1 className={`${darkTheme ? 'text-white' : 'text-btm-footer '} font-bold text-2xl lg:text-3xl`}>
            All volunteer Need posts
          </h1>
          <label className={`${darkTheme ? 'border-white' : ' border-btm-footer'} input input-bordered flex items-center gap-2 border-2`}>
            <input
              type="text"
              className="grow"
              placeholder="Search by post title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="divider divider-neutral"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 px-2 mb-20">
          {posts.map((post) => (
            <div
              className={`card card-compact  shadow-xl ${
                darkTheme ? " bg-active text-black" : "bg-base-100"
              }`}
              key={post._id}
            >
              <figure>
                <img src={post.thumbnail} alt="Shoes" className="h-64 w-full" />
              </figure>
              <div className={`card-body `}>
                <h2 className="card-title text-btm-footer">{post.title}</h2>
                <div className="divider divider-neutral my-0"></div>
                <p className="text-lg text-logo font-bold">
                  Category:{" "}
                  <span className="text-black font-normal text-base">
                    {post.category}
                  </span>
                </p>
                <p className="text-lg text-logo font-bold">
                  Deadline:{" "}
                  <span className="text-black font-normal text-base">
                    {post.deadline}
                  </span>
                </p>

                <div className="card-actions justify-end">
                  <Link
                    to={`/post/${post._id}`}
                    className="btn bg-btm-footer hover:bg-active text-white hover:text-black font-bold w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
