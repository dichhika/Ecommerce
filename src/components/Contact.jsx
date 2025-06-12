import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-10 mb-0 scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contact Us
      </h2>
      <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
