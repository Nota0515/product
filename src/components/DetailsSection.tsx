
import React, { useState } from "react";
import { toast } from "sonner";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return (
    <section id="details" className="w-full bg-black py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6 md:gap-8 lg:grid-cols-1">
          {/* Right Card - Contact Form */}
          <div className="w-full max-w-xl overflow-hidden shadow-[0_0_350px_#FF6D29] sm:rounded-3xl">
            {/* Card Header with background image instead of gradient */}
            <div
              className="relative flex h-48 flex-col items-start p-6 sm:h-64 sm:p-8"
              style={{
                backgroundImage: "url('/background-section3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="mb-4 inline-block rounded-full border border-white px-4 py-2 text-xs text-white sm:px-6">
                Request a demo
              </div>
              <h2 className="mt-auto text-2xl font-bold text-white sm:text-3xl">
                See it for yourself
              </h2>
            </div>

            {/* Card Content - Form */}
            <div
              className="bg-white p-4 sm:p-8"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC",
              }}>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pulse-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pulse-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company (optional)"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pulse-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-pulse-500 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-pulse-600">
                    Request access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsSection;
