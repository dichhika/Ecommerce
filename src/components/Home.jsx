import { Truck, ShieldCheck, Headset } from "lucide-react";
import main from "../assets/image/main.jpg";
function Home() {
  return (
    <div className="w-full">
      {/* Banner with Image */}
      <section className="w-full bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Premium Furniture for Your Dream Home
            </h1>
            <p className="text-gray-600 text-lg">
              Explore elegant, high-quality furniture that brings comfort and
              class to every room.
            </p>
          </div>

          {/* Banner Image */}
          <div className="flex-1">
            <img src={main} alt="Furniture Banner" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-3 text-center">
        {/* Card 1: Free Delivery */}
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <Truck className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
          <p className="text-sm text-gray-600">
            Enjoy fast & free shipping on all orders across the country.
          </p>
        </div>

        {/* Card 2: 100% Authentic */}
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <ShieldCheck className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            100% Authentic
          </h3>
          <p className="text-sm text-gray-600">
            We guarantee original quality with verified manufacturing.
          </p>
        </div>

        {/* Card 3: 24/7 Support */}
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <Headset className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Support 24/7</h3>
          <p className="text-sm text-gray-600">
            Our friendly support team is always here to help you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
