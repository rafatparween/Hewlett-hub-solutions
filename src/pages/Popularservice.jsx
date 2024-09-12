import React from 'react';

const PopularServices = () => {
  const services = [
     {
      name: 'Mobile Devices',
      image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Wifi & Network',
      image: 'https://rukminim2.flixcart.com/image/612/612/jhjg13k0/router/q/v/b/tp-link-tl-wa855re-original-imaff29ujypt3b8u.jpeg?q=70',
    },
    {
      name: 'Computer Support',
      image: 'https://rapidtech.co.ke/wp-content/uploads/2022/07/dell-featured3.jpg',
    },
    {
      name: 'Printers',
      image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08749687.png',
    },
    {
      name: 'Audio & Video',
      image: 'https://www.altasami.com/images/av1.png',
    },
  ];

  return (
    <div className="py-12 mt-[-182px]">
      <h2 className="text-2xl font-semibold text-center mb-8 text-[32px] text-[#0C71C3] font-sans">Popular Services</h2>
      <div className="flex justify-center gap-8 items-center">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.image}
              alt={service.name}
              className="w-[200px] h-[180px] object-contain mx-auto"
            />
            <p className="mt-4 text-gray-700 font-sans text-[16px]">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
