import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectCoverflow, EffectFade } from 'swiper/modules';

const Banner = () => {
// for styling
  const styleHeading = {
    color: '#FFF',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '140%',

  };
  const styleParagraph = {
    color: '#FFF',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '160%',
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide className="flex items-center h-full  mb-0" >


        <div className="h-[230px] md:h-[97vh] lg:h-[97vh]!" style={{ backgroundImage: 'url(https://i.ibb.co/3RPHcrH/Vector-1.png)', backgroundSize: 'cover' }}>

          <div className="flex flex-col justify-center max-w-[1250px] mx-auto text-white h-full">
            <div className=''>


              <h3 className="md:text-7xl w-[340px] mx-auto md:mx-0 lg:mx-0 md:w-[653px] lg:w-[653px]  lg:text-7xl text-center md:text-left lg:text-left  text-3xl mt-14 md:mt-0 lg:mt-0 font-space_grotesk" style={styleHeading}>It is not just Food It is Experience
              </h3>

              <div className=' hidden md:block lg:block'>
                <p className='my-7 md:w-[543px] lg:w-[543px] font-montserrat' style={styleParagraph}>Looking for food web design? We've collected the best examples of food websites, web design</p>
                <button className=' w-44 p-3 rounded-lg  bg-[#F26924] font-poppins'>Order Now</button>
              </div>

            </div>
          </div>
        </div>

      </SwiperSlide>

      {/* 2nd swiperSlider */}

      <SwiperSlide className="flex items-center h-full  " >


        <div className="h-[230px] md:h-[97vh] lg:h-[97vh]!" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'cover' }}>

          <div className="flex flex-col justify-center max-w-[1250px] mx-auto text-white h-full">
            <div className=''>


              <h3 className="md:text-7xl w-[340px] mx-auto md:mx-0 lg:mx-0 md:w-[653px] lg:w-[653px]  lg:text-7xl text-center md:text-left lg:text-left  text-3xl mt-14 md:mt-0 lg:mt-0 font-space_grotesk" style={styleHeading}>It is not just Food It is Experience
              </h3>

              <div className=' hidden md:block lg:block'>
                <p className='my-7 md:w-[543px] lg:w-[543px] font-montserrat ' style={styleParagraph}>Looking for food web design? We've collected the best examples of food websites, web design</p>
                <button className=' w-44 p-3 rounded-lg font-poppins bg-[#F26924]'>Order Now</button>
              </div>


            </div>
          </div>
        </div>
{/* 3rd swiperSlider */}
      </SwiperSlide>
      <SwiperSlide className="flex items-center h-full  " >


        <div className="h-[230px] md:h-[97vh] lg:h-[97vh]!" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'cover' }}>

          <div className="flex flex-col justify-center max-w-[1250px] mx-auto text-white h-full">
            <div className=''>


              <h3 className="md:text-7xl w-[340px] mx-auto md:mx-0 lg:mx-0 md:w-[653px] lg:w-[653px]  lg:text-7xl text-center md:text-left lg:text-left  text-3xl mt-14 md:mt-0 lg:mt-0 font-space_grotesk" style={styleHeading}>It is not just Food It is Experience
              </h3>

              <div className=' hidden md:block lg:block'>
                <p className='my-7 md:w-[543px] lg:w-[543px] font-montserrat ' style={styleParagraph}>Looking for food web design? We've collected the best examples of food websites, web design</p>
                <button className=' w-44 p-3 rounded-lg font-poppins bg-[#F26924]'>Order Now</button>
              </div>








            </div>
          </div>
        </div>

      </SwiperSlide>
      <div className=' block md:hidden lg:hidden text-black w-[335px] mx-auto'>
        <p className='mt-10 text-lg' >Looking for food web design? We've collected the best examples of food websites, web design</p>
        <button className='w-full p-3 rounded-lg  bg-[#F26924] mt-3'>Order Now</button>
      </div>








    </Swiper>
  );
};

export default Banner;
