import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveListTitle } from "../../store/todoListsSlice";
import { getAllPostsForList } from "../../store/todoPostsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Button from "../../common/button/Button";
import PostItem from "../../common/post-item/PostItem";
import ScrollToUp from "../../common/scroll-to-up/ScrollToUp";
import Loader from "../../common/loader/Loader";
import CreateNewPostForm from "../../common/create-post/CreateNewPostForm";

import "./detail.scss";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, title } = useSelector((state) => state.todoPosts.todoPosts);

  const { status } = useSelector((state) => state.todoPosts);

  useEffect(() => {
    dispatch(saveListTitle(id));
    dispatch(getAllPostsForList(id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container ">
        <div className="detail mt-6">
          <div className="detail__header">
            <div className="header__form">
              <div className="form__wrap">
                <CreateNewPostForm listId={id} />
              </div>
            </div>
            <div className="header__btn">
              <Button type="goBack" onClick={goBack} />
            </div>
          </div>
          {status === "loading" && <Loader />}
          {!posts.length > 0 && (
            <h2>List "{title}" is empty, pleace create new posts</h2>
          )}
          <TransitionGroup className="detail__wrapper ">
            {posts.map((post) => (
              <CSSTransition key={post.id} timeout={500} classNames="animate">
                <PostItem
                  title={post.attributes.title}
                  id={post.id}
                  completed={post.attributes.completed}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <ScrollToUp />
      </div>
    </>
  );
};

export default Detail;
