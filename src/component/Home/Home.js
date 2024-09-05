import React, { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://ca0f6fe3576e3a68bec4.free.beeceptor.com/api/users"
      );
      const result = await response.json();
      setItems(result);
    };
    getData();
  }, []);

  console.log(items);

  return (
    <div>
      <h2>ALL ITEMS</h2>
      <p>All The Data Present In REST API Is Given Below!</p>
      <table border="solid 1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Prize</th>
            <th>Purchased</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.prize}</td>
              <td>
                <input type="checkbox" checked={item.isPurchased} />
              </td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
