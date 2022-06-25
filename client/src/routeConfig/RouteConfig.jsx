import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import NotFound from "../pages/notFound/NotFound";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/todo-lists/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;
