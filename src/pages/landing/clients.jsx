import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import client_huang from "Assets/img/client_Huang_Rethink.png";
import client_grace from "Assets/img/client_Grace.png";
import client_huang_csr from "Assets/img/client_huang_csr.png";
import client_yang from "Assets/img/client_yang.png";

import client_huang_mobile from "Assets/img/client_Huang_Rethink_mobile.png";
import client_grace_mobile from "Assets/img/client_Grace_mobile.png";
import client_huang_csr_mobile from "Assets/img/client_huang_csr_mobile.png";
import client_yang_mobile from "Assets/img/client_yang_mobile.png";

import BackgroundColorAnimation from "Components/BackgroundColorAnimation";
import SubTitleText from "Components/subTitleText";

const ClientsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .swiper-slide {
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }
  .swiper-slide-next,
  .swiper-slide-prev {
    transform: scale(0.8);
    opacity: 0.3;
  }
  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: var(--gray_4, #9c9c9c);
    opacity: 0.3;
    margin: 0 9px;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  @media (max-width: 769px) {
    .swiper-pagination-bullet {
      width: 5px;
      height: 5px;
      margin: 0 8px;
    }
  }
`;

const ClientImage = styled.img`
  width: ${(props) => props.width};
  height: auto;
  border-radius: 10px;
`;

const ClientsSwiper = () => {
  const [imagesSrc, setImagesSrc] = useState([
    {
      id: "1",
      src: client_huang,
      mobileSrc: client_huang_mobile,
      alt: "Client Tiana Huang - Rethink",
    },
    {
      id: "2",
      src: client_grace,
      mobileSrc: client_grace_mobile,
      alt: "Client Grace - Hearing",
    },
    {
      id: "3",
      src: client_huang_csr,
      mobileSrc: client_huang_csr_mobile,
      alt: "Client Huang - CSR",
    },
    {
      id: "4",
      src: client_yang,
      mobileSrc: client_yang_mobile,
      alt: "Client Yang - Annie",
    },
  ]);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [device, setDevice] = useState("desktop");

  const updateDevice = () => {
    const width = window.innerWidth;
    if (width < 480) {
      setDevice("mobile");
    } else if (width < 769) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  };

  useEffect(() => {
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  useEffect(() => {
    const images = [
      {
        id: "1",
        src: client_huang,
        mobileSrc: client_huang_mobile,
        alt: "Client Tiana Huang - Rethink",
      },
      {
        id: "2",
        src: client_grace,
        mobileSrc: client_grace_mobile,
        alt: "Client Grace - Hearing",
      },
      {
        id: "3",
        src: client_huang_csr,
        mobileSrc: client_huang_csr_mobile,
        alt: "Client Huang - CSR",
      },
      {
        id: "4",
        src: client_yang,
        mobileSrc: client_yang_mobile,
        alt: "Client Yang - Annie",
      },
    ];

    const newImages = images.map((image) => ({
      ...image,
      src: device === "mobile" ? image.mobileSrc : image.src,
    }));

    setImagesSrc(newImages);
  }, [device]);

 

  const getImageWidth = () => {
    switch (device) {
      case "desktop":
        return "580px";
      case "tablet":
        return "464px";
      case "mobile":
        return "390px";
      default:
        return "100%";
    }
  };

  const handlePaginationClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <ClientsWrapper data-aos="fade-in" data-aos-delay="700">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        speed={800}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          464: {
            slidesPerView: 1.5,
          },
          580: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 1.7,
          },
          700: {
            slidesPerView: 1.8,
          },
          769: {
            slidesPerView: 1.9,
          },
          870: {
            slidesPerView: 2,
          },
          970: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 2.2,
          },
          1250: {
            slidesPerView: 2.3,
          },
          1350: {
            slidesPerView: 2.4,
          },
          1440: {
            slidesPerView: 2.5,
          },
        }}
      >
        {imagesSrc.map((image, index) => (
          <SwiperSlide key={index}>
            <ClientImage
              src={image.src}
              alt={image.alt}
              width={getImageWidth()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationWrapper>
        {imagesSrc.map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${index === activeIndex ? "swiper-pagination-bullet-active" : ""}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </PaginationWrapper>
    </ClientsWrapper>
  );
};

const Clients = () => {
  return (
    <div className="mb-[80px] mt-[120px] flex flex-col justify-center sm:mt-[140px] md:mb-[100px] md:mt-[160px]">
      <BackgroundColorAnimation
        translateXLeft="30%"
        translateXRight="-30%"
        translateXLeftMd="10%"
        translateXRightMd="30%"
        translateXRightSm="60%"
      />
      <SubTitleText
        title="Our Clients"
        content={`Futual 已與許多理念相同的客戶建立合作，\n包含NGO與企業，共創永續行動影響力。`}
      />
      <div className="h-[56px] sm:h-[60px] md:h-[70px]" />
      <ClientsSwiper />
    </div>
  );
};

export default Clients;
