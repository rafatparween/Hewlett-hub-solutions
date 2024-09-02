import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sanaya khan.",
      location: "Kashmeer,Hemis",
      date: "03/29/2024",
      review: "I recently bought a refurbished laser printer from Hewlett Hub Solutions, and it works like new. Great print quality and excellent customer service. Highly recommend.",
      rating: 5,
      verified: true,
    },
    {
      name: "Darryl S.",
      location: "Columbia, MD",
      date: "08/28/2024",
      review: "Hewlett Hub Solutions surpassed my expectations. The refurbished inkjet printer I purchased was in top-notch condition, and the price couldn't be beat. Their team offered excellent support every step of the way.",
      rating: 5,
      verified: true,
    },
    {
      name: "Michael P.",
      location: "Rancho Cucamonga, CA",
      date: "08/30/2024",
      review: "The multifunction printer I purchased from Hewlett hub solutions is an incredible find. It looks and works just like new. I'm really impressed with their quality control and meticulous attention to detail. I’d definitely buy from them again.",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-[#0C71C3] mt-[30px]">What our customers say</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex items-center justify-between">
              <div className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </div>
              <div className="text-gray-500 text-sm">{testimonial.date}</div>
            </div>
            <p className="mt-4">{testimonial.review}</p>
            <div className="mt-4">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
              {testimonial.verified && (
                <p className="text-blue-500 text-sm">Verified ✓</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
