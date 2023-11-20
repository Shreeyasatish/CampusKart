import React, { useState } from 'react';
import './donate.css';

const Donate = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    convertImageToBase64(file);
  };

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/donates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName,
          category,
          description,
          image,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Reset form fields or show success message
      setItemName('');
      setCategory('');
      setDescription('');
      setImage('');
      alert('Item donated successfully!');
      // Perform any additional actions or show success message
    } catch (error) {
      console.error('Error donating item:', error);
      // Show error message
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate an Item</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label" htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" className="input-text" value={itemName} onChange={handleItemNameChange} required />

        <label className="label" htmlFor="category">Category:</label>
        <input type="text" id="category" className="input-text" value={category} onChange={handleCategoryChange} required />

        <label className="label" htmlFor="description">Description:</label>
        <textarea id="description" className="textarea" value={description} onChange={handleDescriptionChange} required />

        <label className="label" htmlFor="image">Image:</label>
        <input type="file" id="image" className="input-file" onChange={handleImageChange} accept="image/*" required />

        <button type="submit" className="submit-button">Donate</button>
      </form>
    </div>
  );
};

export default Donate;