// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CustomerReview from '../sections/CustomerReview';
// import HelpPage from '../sections/HelpPage';
// import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';

// const Home = () => {
//   return (
//     <>
//       <div className="bg-teal-50 min-h-screen flex items-center justify-center">
//         <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 p-4">
//               <h1 className="text-[30px] font-bold text-blue-600 mb-4">
//                 Welcome to Hewlett Hub solutions{' '}
//               </h1>
//               <p className="text-gray-700 text-lg mb-4 ">
//                 At Hewlett Hub Solutions LLC, we are your trusted specialists for resolving printer issues across all brands and models. With a strong focus on restoring your printers to full functionality, we ensure that your devices are up and running smoothly, minimizing downtime and frustration.
//               </p>
//               <p className="text-gray-700 text-lg mb-4">
//                 In addition to printer repairs, we offer a comprehensive range of tech services, including new computer setup, operating system installations or re-installations, and software configuration. Our expert team also provides thorough support for computer repair, data backup and transfer, and virus removal and cleanup.

//                 Our mission is to deliver reliable and efficient solutions to all your tech challenges, so you can enjoy a hassle-free experience with your technology.
//               </p>
//             </div>
//             <div className="md:w-1/2 p-4 flex items-center justify-center">
//               <img
//                 src="https://img.freepik.com/premium-photo/close-up-office-table-with-printer-it_93675-81686.jpg?w=826"
//                 alt="Refurbished Printer"
//                 className="rounded-lg shadow-xl h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------- */}
//       <section className="bg-teal-50 py-4 flex justify-center items-center">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
//             <p className="text-[#0f766e] mt-2">Thousands of Techs Nationwide</p>
//           </div>

//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
//             <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
//           </div>

//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <CheckCircleOutlineIcon
//               style={{ color: '#1e3a8a', marginTop: '8px' }}
//             />
//             <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
//           </div>
//         </div>
//       </section>
//       <PeaceOfMindGuarantee />
//       <CustomerReview />
//       <HelpPage />
//     </>
//   );
// };

// export default Home;


import React from 'react';
import Peace from '../components/Peace';
import Testimonials from '../components/Testimonials';
import Technicians from '../components/Technicians';
import HelpPage from '../sections/HelpPage';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Slider = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <header className="bg-blue-500 h-[630px] relative flex items-center">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="text-white lg:w-1/2 p-8 ml-[203px]">
              <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
                In-Home & Online Support for your{' '}
                <span className="font-bold">Streaming Device</span>
              </h1>
              <p className="mb-6">
                The best tech solution, ready to help you - anytime, anywhere.
              </p>
              <div className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4">
                <button className="flex items-center justify-between w-full">
                  I need help with...
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9605.jpg"
                alt="Support Staff"
                className="max-w-full h-auto mt-[112px]"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-white py-4">
            <div className="text-[#0C71C3] flex items-center">
              <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Thousands of Techs Nationwide
            </div>
            <div className="text-[#0C71C3] flex items-center">
              <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Service as Soon as Today
            </div>
            <div className="text-[#0C71C3] flex items-center">
              <CheckCircleOutlineIcon
                className="mr-2"
                style={{ color: '#1e3a8a' }}
              />
              Don't Pay Until It’s Done
            </div>
          </div>
        </header>
      </div>

      <section className="">
        {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Thousands of Techs Nationwide</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <CheckCircleOutlineIcon
              style={{ color: '#1e3a8a', marginTop: '8px' }}
            />
            <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
          </div>
        </div> */}
      </section>

      <Peace />
      <Testimonials />
      <Technicians />
      <HelpPage />
    </>
  );
};

export default Slider;



