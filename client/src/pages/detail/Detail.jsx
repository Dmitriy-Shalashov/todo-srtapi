import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveListTitle } from "../../store/todoListsSlice";
import { getAllPostsForList, cleareState } from "../../store/todoPostsSlice";
import { useParams, useNavigate } from "react-router-dom";

import Button from "../../common/button/Button";
import PostItem from "../../common/post-item/PostItem";
import Loader from "../../common/loader/Loader";

import "./detail.scss";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, posts } = useSelector((state) => state.todoPosts.todoPosts);
  const { status } = useSelector((state) => state.todoPosts);
  console.log(title);
  console.log(posts);
  useEffect(() => {
    dispatch(saveListTitle(id));
    dispatch(getAllPostsForList(id));

    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      dispatch(cleareState());
    };
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container ">
        <div className="detail mt-6">
          <div className="detail__btn">
            <Button type="goBack" onClick={goBack} />
          </div>
          {status === "loading" && <Loader />}
          {/* {!posts.length > 0 && <h2>List empty</h2>} */}
          <div className="detail__wrapper ">
            {posts.map((post) => (
              <PostItem
                key={post.id}
                title={post.attributes.title}
                id={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
