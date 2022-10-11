import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const users = useSelector(state.allUsers.users);
  const dispatch = useDispatch();
  return <div>Products</div>;
}
