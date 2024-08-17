import Website_image from "Assets/img/projects/river/website1440_768_390.png";

const Website = () => {
  return (
    <div className="flex flex-col mx-auto items-center px-[22px] sm:px-[71px] md:max-w-[1044px]">
      <p className="text-center font-noto text-[18px] font-normal  leading-[180%] tracking-[0.24em] text-gray_5_black sm:text-[20px] md:text-[22px]">
        流域共好平台
      </p>
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <img src={Website_image} alt="Website" />
      <a href="https://csr.cw.com.tw/river/" target="_blank" rel="noopener noreferrer">
        <div className="mt-[26px] rounded-[84px] bg-gray_4 px-[31px] pb-[14px] pt-[13px] shadow-[0px_4px_9px_0px_rgba(20,20,20,0.18)] sm:mt-[30px] sm:px-[33px] md:mt-[40px] md:px-[37.5px]">
          <span className="font-jost text-[14px] font-[600] italic leading-[160%] tracking-[0.08em] text-pure_white md:text-[15px]">
            View Website
          </span>
        </div>
      </a>
    </div>
  );
};

export default Website;
