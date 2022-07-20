import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoLists } from "./store/todoListsSlice";

import { selectStatuslists } from "../src/store/selectors";

import "./app.global.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import Header from "./common/header/Header";
import RouteConfig from "./routeConfig/RouteConfig";
import Loader from "./common/loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(selectStatuslists);

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loader />}
      <Header />
      <RouteConfig />
    </>
  );
}

export default App;
