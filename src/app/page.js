"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    response: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://techbooback.onrender.com/data",data)
    console.log("Form submitted:", data);
    setData({
      name: "",
      email: "",
      phone: "",
      response: "",
    })
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[50%] border shadow-lg p-6 flex flex-col rounded-lg bg-white text-black"
      >
        <h1 className="text-2xl font-bold mb-6 text-center ">NextFortune</h1>

        <label className="text-lg font-medium mb-2">
          Name: <span className=" text-red-500">*</span>
        </label>
        <input
          name="name"
          placeholder="Enter your name"
          required
          value={data.name}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 rounded-lg px-4 mb-4 outline-none transition-all duration-200"
        />

        <label className="text-lg font-medium mb-2">
          Email: <span className=" text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 rounded-lg px-4 mb-4 outline-none transition-all duration-200"
        />

        <label className="text-lg font-medium mb-2">
          Phone Number: <span className=" text-red-500">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 rounded-lg px-4 mb-4 outline-none transition-all duration-200"
        />

        <label className="text-lg font-medium mb-2">Your Message:</label>
        <textarea
          name="response"
          placeholder="Enter your message or questions"
          value={data.response}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-24 rounded-lg px-4 mb-6 outline-none resize-none transition-all duration-200"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
