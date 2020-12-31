import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import deleteData from "./DeleteData";
import { toggleDeleteTodo } from "./deleteSlice";

const Delete = () => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  return <div>delete message </div>;
};

export default Delete;
