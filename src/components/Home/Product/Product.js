import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "./../../../redux/action/userAction";

export default function Product() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers.users);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setUsers(response.data));
    };
    fetchProducts();
  }, [dispatch]);

  console.log(users);
  return <div>Product</div>;
}
