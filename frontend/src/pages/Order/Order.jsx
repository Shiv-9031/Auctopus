import React from "react";
import { Layout } from "../../component/Layout/Layout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Order.css";
import axios from "axios";
export const Order = () => {
  const book = useSelector((state) => state.BackendData.allBook);
  const user = useSelector((state) => state.BackendData.info);
  const [res, setRes] = React.useState("false");
  const payload = {
    book: book.id,
    student_id: user.data.id,
  };

  //sending data function
  const sendData = async () => {
    let response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/book/order/`,
      payload
    );
    response ? setRes("true") : setRes("false");
  };

  return (
    <Layout>
      <div className="order-container">
        <div className="order-header">
          <h1>Book Order List</h1>
        </div>
        <div className="order-input">
          <table className="table">
            <thead>
              <tr>
                <th>Book.id</th>
                <th>Student.id</th>
                <th>Book Name</th>
                <th>Order</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{book.id}</td>
                <td>{user.data.id}</td>
                <td>{book.book_name}</td>
                <td>
                  <button onClick={sendData} className="order">
                    Order
                  </button>
                </td>
                <td>{res}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
