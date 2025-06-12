import React from "react";
import Sofa from "../assets/image/photo.avif";
import Living from "../assets/image/Living-Room.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Images */}
        <div className="flex gap-4">
          <img
            src={Living}
            alt="Living Room Setup"
            className="w-50 md:w-48 h-auto rounded shadow-lg"
          />
          <img
            src={Sofa}
            alt="Modern Sofa"
            className="w-48 md:w-56 h-auto rounded shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            About Our Store
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui.
          </p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui.
          </p>
          <button className="mt-2 px-5 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
