// import React from 'react';

// const PrinterProductList = () => {
//   const printerProducts = [
// {
//   id: 1,
//   name: 'Computer',
//   imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
// },
// {
//   id: 2,
//   name: 'Printer',
//   imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
// },
// {
//   id: 3,
//   name: 'Software setup ',
//   imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
// },
// {
//   id: 1,
//   name: 'Laptop',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d9fdc92a-9998-4561-92c5-9f3c6dbfe5ba.jpg;maxHeight=200;maxWidth=200',
// },
// {
//   id: 2,
//   name: ' Printer Printers, Ink & Home Office',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517854_sd.jpg;maxHeight=178;maxWidth=300',
// },
// {
//   id: 3,
//   name: 'Phone',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=200;maxWidth=298',
// },
// {
//   id: 1,
//   name: 'TV',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525240_sd.jpg;maxHeight=127;maxWidth=300',
// },
// {
//   id: 2,
//   name: 'Drones',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558798_sd.jpg;maxHeight=167;maxWidth=300',
// },
// {
//   id: 3,
//   name: 'Activity Trackers & Smartwatches',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505983_rd.jpg;maxHeight=200;maxWidth=271',
// },



//   ];

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">
//         Shop deals by category
//       </h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             style={{ width: '350px', height: '350px' }} // Increased width and height
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="h-48 w-48 mb-4" // Increased image size
//             />
//             <h2 className="text-blue-600 text-lg text-center">
//               {product.name}
//             </h2>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PrinterProductList;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext';

// const PrinterProductList = () => {
//   const { addToCart } = useContext(CartContext);

//   const printerProducts = [
//     {
//       id: 1,
//       name: 'Computer',
//       imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
//     },
//     // Other products...
//   ];

//   const handleImageClick = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">
//         Shop deals by category
//       </h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <Link 
//             key={product.id} 
//             to={`/product/${product.id}`} 
//             onClick={() => handleImageClick(product)}
//           >
//             <div
//               className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               style={{ width: '350px', height: '350px' }}
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-48 w-48 mb-4"
//               />
//               <h2 className="text-blue-600 text-lg text-center">
//                 {product.name}
//               </h2>
//             </div>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PrinterProductList;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const PrinterProductList = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const printerProducts = [
//     // Add related products for each product if needed
//     {
//       id: 1,
//       name: 'Computer',
//       imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
//     },
//     {
//       id: 2,
//       name: 'Printer',
//       imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
//     },
//     {
//       id: 3,
//       name: 'Software setup ',
//       imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
//     },
//     {
//       id: 1,
//       name: 'Laptop',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d9fdc92a-9998-4561-92c5-9f3c6dbfe5ba.jpg;maxHeight=200;maxWidth=200',
//     },
//     {
//       id: 2,
//       name: ' Printer Printers, Ink & Home Office',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517854_sd.jpg;maxHeight=178;maxWidth=300',
//     },
//     {
//       id: 3,
//       name: 'Phone',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=200;maxWidth=298',
//     },
//     {
//       id: 1,
//       name: 'TV',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525240_sd.jpg;maxHeight=127;maxWidth=300',
//     },
//     {
//       id: 2,
//       name: 'Drones',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558798_sd.jpg;maxHeight=167;maxWidth=300',
//     },
//     {
//       id: 3,
//       name: 'Activity Trackers & Smartwatches',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505983_rd.jpg;maxHeight=200;maxWidth=271',
//     },
//     // ... other products
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">Shop deals by category</h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             style={{ width: '350px', height: '350px' }}
//             onClick={() => handleProductClick(product)}
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="h-48 w-48 mb-4"
//             />
//             <h2 className="text-blue-600 text-lg text-center">{product.name}</h2>
//           </div>
//         ))}
//       </section>

//       {/* Related Products Section */}
//       {selectedProduct && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold text-center">Related Products</h2>
//           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
//             {selectedProduct.relatedProducts.map((relatedProduct) => (
//               <Link to={`/productdetail/${relatedProduct.id}`} key={relatedProduct.id}>
//                 <div
//                   className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                   style={{ width: '350px', height: '350px' }}
//                 >
//                   <img
//                     src={relatedProduct.imageUrl}
//                     alt={relatedProduct.name}
//                     className="h-48 w-48 mb-4"
//                   />
//                   <h2 className="text-blue-600 text-lg text-center">{relatedProduct.name}</h2>
//                 </div>
//               </Link>
//             ))}
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PrinterProductList;



// PrinterProductList.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PrinterProductList = () => {
  const navigate = useNavigate();

  const printerProducts = [
    {
      id: 1,
      name: 'Computer',
      imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
      relatedProducts: [
        {
          id: 101,
          name: 'Gaming Computer',
          imageUrl: 'https://example.com/gaming-computer.jpg',
        },
        {
          id: 102,
          name: 'Workstation',
          imageUrl: 'https://example.com/workstation.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Printer',
      imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
      relatedProducts: [
        {
          id: 201,
          name: 'Inkjet Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
        },
        {
          id: 202,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
        },
        {
          id: 3,
          name: 'Software setup ',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
        },
        {
          id: 1,
          name: 'printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
        },
        {
          id: 2,
          name: ' Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
        },
        {
          id: 3,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
        },
        {
          id: 1,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
        },
        {
          id: 2,
          name: 'Brother Hl Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
        },
        {
          id: 3,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
        },
        
        
      ],
    },
    // Other products...
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
      <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">Shop deals by category</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {printerProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ width: '350px', height: '350px' }}
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-48 mb-4"
            />
            <h2 className="text-blue-600 text-lg text-center">{product.name}</h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrinterProductList;

