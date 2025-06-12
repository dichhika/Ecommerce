import {
  Ruler,
  Hammer,
  MessageSquare,
  PackageCheck,
  Paintbrush,
  LifeBuoy,
} from "lucide-react";

function Service() {
  return (
    <section id="service" className="w-full">
      {/* Header Section */}
      <section className="w-full bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide expert solutions to make your furniture experience smooth,
          stylish, and stress-free.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <Ruler className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Custom Design</h3>
          <p className="text-sm text-gray-600">
            Furniture built to fit your exact space and style.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <Hammer className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Installation</h3>
          <p className="text-sm text-gray-600">
            Delivered and assembled by our expert team.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <MessageSquare className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Free Consultation
          </h3>
          <p className="text-sm text-gray-600">
            Expert advice to help you choose the perfect fit.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <PackageCheck className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Quality Assurance
          </h3>
          <p className="text-sm text-gray-600">
            Every item is checked for quality and durability.
          </p>
        </div>

        {/* Service 5: Interior Styling */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <Paintbrush className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Interior Styling
          </h3>
          <p className="text-sm text-gray-600">
            Get professional help to style and match your space.
          </p>
        </div>

        {/* Service 6: After-Sales Support */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
          <LifeBuoy className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            After-Sales Support
          </h3>
          <p className="text-sm text-gray-600">
            Ongoing assistance even after your purchase.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Service;
