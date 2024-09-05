import React, { useState } from "react";
import "./AddData.css";
const AddData = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prize: "",
    isPurchased: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox for boolean value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ca0f6fe3576e3a68bec4.free.beeceptor.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          description: "",
          prize: "",
          isPurchased: false,
        });
      } else {
        alert("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the submission");
    }
  };
  console.log(formData);

  return (
    <>
      <h2>AddData</h2>
      <p>Insert Data into Table</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="prize"
          value={formData.prize}
          onChange={handleChange}
          placeholder="Prize"
          required
        />
        <input
          type="checkbox"
          name="isPurchased"
          value={formData.isPurchased}
          onChange={handleChange}
          placeholder="Purchased"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default AddData;
