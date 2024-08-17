import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import circle_point from "Assets/img/circle_point.png";
// import circle_arrow from "Assets/img/circle_arrow.png";
import { useModal } from "Store/modalContext";
import { ProjectList } from "Constants/projectList";

import "swiper/css";
import "./styles.scss";


const ProjectSwiper = () => {
  const { openModal, setModal } = useModal();
const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef) {
        swiperRef.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [swiperRef]);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        className="lg:w-[840px]"
        observer={true}
        observeParents={true}
        onResize={(swiper) => {
          swiper.slideTo(0);
        }}
        slidesPerView={1.3}
        slidesOffsetBefore={35}
        spaceBetween={30}
        breakpoints={{
          450: {
            slidesPerView: 1.5,
            slidesOffsetBefore: 35
          },
          480: {
            slidesPerView: 1.6,
            slidesOffsetBefore: 35
          },
          500: {
            slidesPerView: 1.7,
            slidesOffsetBefore: 35
          },
          600: {
            slidesPerView: 2,
            slidesOffsetBefore: 35
          },
          700: {
            slidesPerView: 2.2,
            slidesOffsetBefore: 35
          },
          768: {
            slidesPerView: 2.7,
            slidesOffsetBefore: 35
          },
          976: {
            slidesPerView: 3,
            slidesOffsetBefore : 0,
          },
        }}
      >
        <swiper-wrapper>
          {ProjectList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="project-item">
                <a href="#" onClick={(event)=>{
                  event.preventDefault()
                  setModal(item.id)
                  openModal()
                }}>
                  <div className="card relative">
                    <img className="h-full w-full object-cover img" src={item.img} alt={item.id} />
                    <div className="absolute z-20 flex h-full w-full flex-col justify-between">
                      <div className="flex justify-between p-[8px]">
                        <div className="font-[400] rounded-full bg-[#14141466] px-[10px] pb-[3px] pt-[2px] font-noto text-[11px] leading-[1.6em] tracking-[0.08em] text-pure_white">
                          {item.title_tag}
                        </div>
                        {/* <img src={circle_point} alt="circle_point" /> */}
                      </div>
                    </div>
                    <div className="content font-noto">
                      <div className="w-full pl-[20px] text-left leading-[160%] tracking-[0.08em] text-pure_white">
                        <p className="text-[18px] font-[400]">{item.title}</p>
                        <p className="text-[11px] font-[400] text">{item.text}</p>
                      </div>
                      <div className="tag flex items-center gap-x-[7px]">
                        {item.tag.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[30px] font-[400] text-gray_5_black bg-gray_2 px-[11px] py-[3px] text-[11px] leading-[160%] tracking-[0.88px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </swiper-wrapper>
      </Swiper>
    </>
  );
};

export default ProjectSwiper;
