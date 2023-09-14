import React, { useState } from 'react';
import "./style.css"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission or validation here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Điền thông tin để gửi yêu cầu tới ATVIN</h2>
      <div>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Họ và tên'
        />
      </div>
      <div>
      
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder='Số điện thoại'
        />
      </div>
      <div>
      
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
        />
      </div>
      <div>
    
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder='Nội dung yêu cầu'
        />
      </div>
      <button type="submit">Gửi đi</button>
    </form>
  );
};

export default ContactForm;
