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
      name: 'Computers',
      imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
      description: 'All-in-one PC with ultra-thin design, perfect for home and office use.',
      price: 799.99,
      relatedProducts: [
        {
          id: 201,
          name: 'Intel Processor N200',
          imageUrl: 'https://c.media-amazon.com/images/I/61wt6u4yXEL._AC_UY218_.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 202,
          name: 'HP Compaq',
          imageUrl: 'https://c.media-amazon.com/images/I/61SVyNrkDbL._AC_UY218_.jpg',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 203,
          name: 'HP EliteDesk 19',
          imageUrl: 'https://c.media-amazon.com/images/I/61rBqHWhl1L._AC_UY218_.jpg',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 204,
          name: '13th Gen Intel Core i5 27',
          imageUrl: 'https://c.media-amazon.com/images/I/71pFI90l-aL._AC_UY218_.jpg',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 205,
          name: '12th Gen Intel Core i5 27',
          imageUrl: 'https://c.media-amazon.com/images/I/71X-bbWtCAL._AC_UY218_.jpg',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 206,
          name: 'HP ProDesk 600 G2 19',
          imageUrl: 'https://c.media-amazon.com/images/I/61740WUmL4L._AC_UY218_.jpg',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 207,
          name: 'HP Ryzen',
          imageUrl: 'https://c.media-amazon.com/images/I/71CW7r7QcpL._AC_UY218_.jpg',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 208,
          name: 'HP Computer',
          imageUrl: 'https://c.media-amazon.com/images/I/61SVyNrkDbL._AC_UY218_.jpg',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 209,
          name: 'HP T630 19',
          imageUrl: 'https://c.media-amazon.com/images/I/51X70Ct-pmL._AC_UY218_.jpg',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 2,
      name: 'Laptop',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzPHXVnWxUTemMjfeJvXCvuCSqGb85ifyx8hP2nqR762FiQAyAY3cYICqtdwjXQhpyS60SRHeKspOu8pRqdEmhNDFSPN8jRKNmU77z_5vI3RTJs_Cj0_qnj84U8NEY0AFlh-k45g&usqp=CAc',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'HP Laptop 15',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4MRmIJQ0yXv1SKZ9PJ0KoeQQgj7SmjnTO_pbhhN91_3dwcagBJ0mYYijvLkGWFSbTg-rBbJWhFSW5fc2J0oPUSp8a9JQf8hTPnm2AklHGzp5lxHfDn1aKlZ06xK6n10S-otSF37c&usqp=CAc',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'HP Pavilion',
          imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnQJdwqbwEO6_WoEsOwe6l9Plj5sBCEJDYFF60vrvu9psxN5hHFbskk5o0jEWrsBHNLZXrC0-axFHL1BwYlGn-osSMs-zHqeBqGBr3hXncX3A2Sy1EYGaGvJXVGcYqFzNXNTIzDKA&usqp=CAc',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'HP Victus Gaming',
          imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_a4Lh6pFryQB_TsedX02qWDZBCkzv7z1v3hNyN1ek_c33iquf_QlHSABuyZNt9LfmQTQTY_I-nxrGWwZeFH5TSqcdSj7RlyDdqP81McjAO9bTP4yuEmTYnWJZoKxrfj12i9BUTQ&usqp=CAc',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 301,
          name: 'HP Omen Gaming',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQolTjqsQGB9tPydoprdWwNzUT04Wy1bUaoq2_LukyEtQUQX9Qxnet3woOt_x-FDRzRf5r24aq2Tp8S9pk1Dm8up4tpqX4H2x_NrjUq0NxXnNt2ElP1ZLbBmeCkCOqaz7_wKgMzy68&usqp=CAc',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'HP Envy x360',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJnxZgSpNYtNEMV3FJRhjbskLEwg7G7PEH-OUY1XC0QT76HbfwibuVL6ft0Pi1jQsnjnX1DplmB8k1GM22ibzNkPMP_kZpaA10QO_LTnL5UolPscGOH-x2u_9mbNZ_CUyb0zZ_flA&usqp=CAc',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'HP Pavilion Plus',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhug3VKrd_5Y4_-V-wEn5sdHLDqbFM6Bn8joi-uIv7138pbqCdRSJT4M5Dhao_99QsY4MUqmsiGsy6MKmcsr8iXTEViX2SB4EZUb0ipjgzKuzaY24oDx162p5ejeURmmVNb-1ly_5_vEs&usqp=CAc',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 301,
          name: 'HP Amd Ryzen',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjeB40FqVAKbJq9BouJXdTzyQoAylVAaFW9GI87NeA3lorlNhMXcZfFRSa_xdW4I9CyQd8ZQRDymYKtV_xu5BtQU8fX-wVaRaKzBxf4qq6gfbYWhVc2xSk',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'HP Elite Book',
          imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPAIPf4bkSGcghHjndmIHksOSfWupteAY6_Cu6PjgZ6fcfoVRzJgrrewtMh7uAsmH0jfdRtTsIQDwb0sp2jr2IWs1aRANdwl4PKKq5t_SZ',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'HP Laptop 15',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSckl-RpZ9mCCReyjRnI6M08R_Zu_w-30lUShh5ADrH6DBdQwGsO2b-F_GZTIZtifFW7CgChtLlVBtwA8kdr0pcgo8Tm9DzdUhaM56gSWU_x09TYnqUYRQR',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
      ],
    },
    {
      id: 2,
      name: 'Printer',
      imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
      description: 'High-quality printer with advanced features and reliable performance.',
      price: 299.99,
      relatedProducts: [
        {
          id: 201,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 202,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 203,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 204,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 205,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 206,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 207,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 208,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 209,
          name: 'HP T630 19',
          imageUrl: 'https://c.media-amazon.com/images/I/51X70Ct-pmL._AC_UY218_.jpg',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Software Setup',
      imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Software Setup',
      imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Software Setup',
      imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Software Setup',
      imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Desktop Setup',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0Bd7KaYp_5FHhRrPnx2vvgifDBpB9eQONQ&s',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
    {
      id: 3,
      name: 'Software Setup',
      imageUrl: 'data:image/jpeg;base64,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',
      description: 'Complete software setup for optimal performance and usability.',
      price: 89.99,
      relatedProducts: [
        {
          id: 301,
          name: 'Inkjet Printer',
          imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
          description: 'Versatile inkjet printer suitable for home and office use.',
          price: 199.99,
        },
        {
          id: 302,
          name: 'Laser Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
          description: 'Fast and efficient laser printer for high-volume printing.',
          price: 249.99,
        },
        {
          id: 303,
          name: 'Software Setup',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
          description: 'Software setup for optimal printer performance and functionality.',
          price: 99.99,
        },
        {
          id: 304,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
          description: 'Compact and efficient printer for everyday tasks.',
          price: 179.99,
        },
        {
          id: 305,
          name: 'Printer Printers, Ink & Home Office',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
          description: 'Complete printer package for home office needs.',
          price: 229.99,
        },
        {
          id: 306,
          name: 'Printer',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
          description: 'High-quality printer with easy setup and usage.',
          price: 199.99,
        },
        {
          id: 307,
          name: 'Thermal Inkjet Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
          description: 'Specialized thermal inkjet printer for precise printing needs.',
          price: 259.99,
        },
        {
          id: 308,
          name: 'Brother HL Printer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
          description: 'Reliable Brother HL printer for professional environments.',
          price: 299.99,
        },
        {
          id: 309,
          name: 'Activity Trackers & Smartwatches',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWYHNKmOL9NbSZ-3RiwxtszwAoWZaI0AQBw&s',
          description: 'Trackers and smartwatches for monitoring activity and health.',
          price: 149.99,
        },
      ],
    },
  ];
  const handleProductClick = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="mt-20 p-5 flex flex-col items-center min-h-screen bg-blue-500">
      <h1 className="text-[] text-3xl font-extrabold mb-10">Shop deals by category</h1>
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

