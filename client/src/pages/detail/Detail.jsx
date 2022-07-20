import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveListTitle } from "../../store/todoListsSlice";
import { getAllPostsForList } from "../../store/todoPostsSlice";
import { useParams, useNavigate } from "react-router-dom";

import { selectAllPosts, selectStatusPosts } from "../../store/selectors";

import Button from "../../common/button/Button";
import PostItem from "../../common/post-item/PostItem";
import ScrollToUp from "../../common/scroll-to-up/ScrollToUp";
import Loader from "../../common/loader/Loader";
import CreateNewPostForm from "../../common/create-post/CreateNewPostForm";

import styles from "./Detail.module.scss";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { posts, listTitle } = useSelector(selectAllPosts);
  const { status } = useSelector(selectStatusPosts);

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
        <div className={`mt-6 ${styles.detail}`}>
          <div className={styles["detail__header"]}>
            <div className={styles["header__form"]}>
              <div className={styles["form__wrap"]}>
                <CreateNewPostForm listId={id} />
              </div>
            </div>
            <div className={styles["header__btn"]}>
              <Button option="goBack" onClick={goBack} />
            </div>
          </div>
          {status === "loading" && <Loader />}
          {!posts.length > 0 && (
            <h2>List "{listTitle}" is empty, pleace create new posts</h2>
          )}
          <div className={styles["detail__wrapper"]}>
            {posts.map((post) => (
              <PostItem
                key={post.id}
                title={post.attributes.title}
                id={post.id}
                completed={post.attributes.completed}
              />
            ))}
          </div>
        </div>
        <ScrollToUp />
      </div>
    </>
  );
};

export default Detail;
