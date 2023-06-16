// import React from "react";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./form.css";




const Form = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/lawyer/${id}`);
        // console.log(response.data);
        setImageUrl(response.data[0].image);
      } catch (error) {
        console.log('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  //   phone: '',
  //   case: '',
  // });

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log(formData);
  // };

  return (
    // <form onSubmit={handleSubmit} className="form">
    //   <div >
    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       name="name" placeholder="Name"
    //       value={formData.name}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       name="email" placeholder="Email"
    //       value={formData.email}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Phonenumber:</label>
    //     <input
    //       type="email"
    //       name="email" placeholder="Phonenumber"
    //       value={formData.phone}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Case Message:</label>
    //     <textarea
    //       name="message" placeholder="Enter your case details "
    //       value={formData.message}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>
    <div className="main-form">
      <div>
        {imageUrl ? (
          <img src={imageUrl} alt="Image" />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>


      <div className="form">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" placeholder="Enter Your Name Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" placeholder="Enter Your Email Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phonenumber</label>
            <input type="number" placeholder="Enter Your Phonenumber Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your Phonenumber with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Case Summary</label>
            <input type="text" placeholder="Enter Your Case Details" class="form-control" id="exampleInputPassword1" />
            <div id="emailHelp" class="form-text">Don'tworry Your Data will be confidential here</div>

          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );



};

export default Form;
