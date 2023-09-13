import React, { useState } from 'react';
import './hotel.css';
// import Navbar from '../../components/navbar/Navbar'; // Correct the path to Navbar
import Navbar from '../../components/navabr/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleArrowDown, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/Footer/Footer';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // Images Array
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    // Add more images as needed
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && <div className='slider'>
           <FontAwesomeIcon icon={faCircleXmark}/>
           <FontAwesomeIcon icon={faCircleArrowLeft}/>
           <div className='sliderWrapper'>
               <img src={photos[slideNumber]} alt='' className='sliderImg'/>
           </div>
           <FontAwesomeIcon icon={faCircleArrowRight}/>
          </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>Excellent location 500m from center</span>
          <span className='hotelPriceHighLight'>
            Book a stay over Rs10k at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper' key={photo.src}>
                <img onClick={() => handleOpen(i)} src={photo.src} alt='' className='hotelImg' />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1 className='hotelTitle'>Stay in the heart of City</h1>
              <p className='hotelDesc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
              <h2>
                <b>Rs 1500</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

// import React, { useState } from 'react'
// import './hotel.css'
// import Navbar from '../../components/navabr/Navbar'
// import Header from '../../components/header/Header'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import MailList from '../../components/mailList/MailList'
// import Footer from '../../components/Footer/Footer'
// import { useState } from 'react'
// const hotel = () => {
    
//     const {slideNumber,setSlideNumber} = useState(0);
//     const {open,setOpen} =useState(false);

//     // Images Array
//     const photos = [
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         {
//             src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
//         },
//         // Add more images as needed
//     ];
// const handleOpen = (i) =>{
//     setSlideNumber(i);
//     setOpen(true);
// }
//     return (
//         <div>
//             <Navbar />
//             <Header type="list" />
//             <div className='hotelContainer'>
//                {open && <div className='slider'>
//                    dhjafkshgd
//                </div>}
//                 <div className='hotelWrapper'>
//                      <button className='bookNow'>Reserve or Book Now!!</button>
//                     <h1 className='hotelTitle'>Grand Hotel</h1>
//                     <div className='hotelAddress'>
//                         <FontAwesomeIcon icon={faLocationDot} />
//                         <span>Elton St 125 New York</span>
//                     </div>
//                     <span className='hotelDistance'>
//                         Excellent location 500m from center
//                     </span>
//                     <span className='hotelPriceHighLight'>
//                         Book a stay over Rs10k at this property and get a free airport taxi
//                     </span>
//                     <div className='hotelImages'>
//                         {photos.map((photo,i) => (
//                             <div className='hotelImgWrapper' key={photo.src}>
//                                 <img onClick={handleOpen} src={photo.src} alt='' className='hotelImg' />
//                             </div>
//                         ))}
//                         {/* ()=> setSlideNumber(i) */}
//                     </div>
//                     <div className='hotelDetails'>
//                         <div className='hotelDetailsText'>
//                           <h1 className="hotelTitle">Stay in the heart of City</h1>
//                           <p className="hotelDesc">
//                                Located a 5-minute walk from St.  Florian's Gate in Krakow, Tower
//                                Street Apartments has accommodations with air conditioning and
//                                free WiFi. The units come with hardwood floors and feature a
//                                fully equipped kitchenette with a microwave, a flat-screen TV,
//                                and a private bathroom with shower and a hairdryer. A fridge is
//                                also offered, as well as an electric tea pot and a coffee
//                                machine. Popular points of interest near the  apartment include
//                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
//                                airport is John Paul II International Kraków–Balice, 16.1 km
//                                from Tower Street Apartments, and the property offers a paid
//                                airport shuttle service.
//                            </p>
//                         </div>
//                         <div className='hotelDetailsPrice'>
//                             <h1>Perfect for a 9-night stay!!</h1>
//                             <span>Located in the real heart of Krakow,this properly has an excellent location score of 9.8</span>
//                             <h2>
//                                <b>Rs 1500</b> (9 nights)
//                             </h2>
//                             <button>Reserve or Book Now!!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <MailList/>
//                 <Footer/>
//             </div>
//         </div>
//     )
// }

// export default hotel;

