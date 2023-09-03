import { Layout } from "../../component/Layout/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeBook } from "../../Redux/feature/Slice";
import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const [booklist, setbooklist] = React.useState([]);
  const Response = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/book/register/`
    );
    setbooklist(response.data.data);
  };

  React.useEffect(() => {
    Response();
  }, []);
  return (
    <Layout>
      <h1>Book list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Book id</th>
            <th>Book Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {booklist?.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.book_name}</td>
                <td>{book.description}</td>
                <td>{book.category}</td>
                <td>
                  <Link
                    to="/orders"
                    className="order"
                    onClick={() => {
                      dispatch(
                        storeBook({
                          id: book.id,
                          book_name: book.book_name,
                          description: book.description,
                          category: book.category,
                        })
                      );
                    }}
                  >
                    Click here
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};
