import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ListItem from "../../common/list-item/ListItem";
import { selectAllLists } from "../../store/selectors";

import getLink from "./helpers/getLink";
import styles from "./Home.module.scss";

const Home = () => {
  const todoLists = useSelector(selectAllLists);

  return (
    <>
      <div className={styles.container}>
        <ul className={`mt-6 ${styles.list__wrapper}`}>
          {todoLists.map((list) => (
            <Link key={list.id} to={getLink(list.id)}>
              <ListItem title={list.attributes.title} id={list.id} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
