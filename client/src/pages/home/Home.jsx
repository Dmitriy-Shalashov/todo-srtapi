import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ListItem from "../../common/list-item/ListItem";

import getLink from "./helpers/getLink";
import "./home.scss";

const Home = () => {
  const todoLists = useSelector((state) => state.todoLists.todoLists);

  return (
    <>
      <div className="container">
        <ul className="list-wrapper mt-6">
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
