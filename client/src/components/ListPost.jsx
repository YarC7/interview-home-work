import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";
import user from "../assets/user.png";
import * as actionType from "../../lib/saga/actions";

import { useDispatch, useSelector } from "react-redux";
const ListPost = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedPostId, setSelectedPostId] = useState(null); // To track which post's comments to fetch
  // const { data: posts, isLoading, isError } = useGetPostsQuery(searchTerm);

  // const { data: comments, isLoading: commentsLoading } =
  //   useGetCommentsByPostIdQuery(selectedPostId, {
  //     skip: !selectedPostId, // Skip fetching if no post is selected
  //   });
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts.posts);
  const comments = useSelector((state) => state.getComments.comments);
  useEffect(() => {
    // const postId = 1; // Example postId
    dispatch(actionType.getPosts(searchTerm));
    dispatch(actionType.getComments(selectedPostId));
  }, [dispatch, searchTerm, selectedPostId]);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div>
      {/* SEARCH BAR */}
      <div className="mb-6 ">
        <div className="flex items-center gap-4 ">
          <Button icon={<SearchOutlined />}></Button>
          <input
            className="w-full py-2 px-4 rounded "
            placeholder="Search Posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* POST LIST */}
      <div className="gap-10">
        {posts.map((post) => {
          const commentCount = comments.filter((comment) => comment.postId === post.id).length;

          return (
            <div
              key={post._id}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-5xl text-gray-900 font-semibold text-center">
                  {post.title}
                </h1>
                <div className="flex justify-between max-w-full w-full m-2">
                  <div>
                    <h2 className="text-2xl text-gray-900 font-semibold text-left">
                      Author: {post.userId}
                    </h2>
                    <h2 className="text-2xl text-gray-900 font-semibold text-left">
                      Created at: {formatDate(post.created_at)}
                    </h2>
                  </div>
                  <div>
                    {post.tags.map((tag, index) => {
                      const color = getRandomColor();
                      return (
                        <Button
                          className="m-1"
                          key={index}
                          style={{
                            backgroundColor: color,
                            color: "#fff",
                            borderColor: color,
                          }}
                          variant="outlined"
                        >
                          {tag}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-semibold text-justify my-4">
                  {post.content.split(" ").slice(0, 100).join(" ")}...
                </h3>
              </div>
              <div>
                <button
                  className="flex ml-4"
                  onClick={() => setSelectedPostId(post.id)}
                >
                  Replies ({commentCount || 0}) {/* Display comment count */}
                </button>
                {selectedPostId === post.id && comments.length > 0 && (
                  <div className="mt-4 text-left">
                    {/* Filter comments based on postId */}
                    {comments
                      .filter((comment) => comment.postId === post.id) // Lọc comment theo postId
                      .map((comment, index) => (
                        <div key={index} className="border-b py-2 flex">
                          <img
                            src={user}
                            alt="avatar"
                            width={150}
                            height={200}
                            className="mb-2 rounded-2xl w-10 h-10"
                          />
                          <div className="ml-4">
                            <p className="text-gray-700 text-md">
                              <strong>{comment.owner}</strong> Posted at:{" "}
                              {formatDate(comment.created_at)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {comment.content}
                            </p>
                            <br />
                            <p className="text-sm text-gray-500">
                              Reply to
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPost;
