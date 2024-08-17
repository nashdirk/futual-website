import PropTypes from "prop-types";
import White_bg_md from "Assets/img/projects/left shadow 768.svg";
import White_bg_lg from "Assets/img/projects/left shadow 1440.svg";

const ProjectBanner = ({
  bannerImage_lg,
  bannerImage_md,
  bannerImage_sm,
  iconImage,
  awardImage = '',
  tagList,
  title,
  subtitle,
  category,
  categoryColor,
  description,
}) => {
  return (
    <>
      <div className="relative mx-auto h-[512px] w-full min-w-[366px] overflow-hidden png_sm:h-[756px] md:h-[580px]">
        <div
          className="absolute inset-0 mx-auto w-[calc(100%-24px)] rounded-[24px] bg-cover bg-top bg-no-repeat shadow-[inset_0px_-10px_20px_0px_rgba(20,20,20,0.10)] png_sm:hidden"
          style={{
            backgroundImage: `url(${bannerImage_sm})`,
          }}
        />
        <div
          className="absolute inset-0 mx-auto hidden w-[calc(100%-24px)] rounded-[25px] bg-cover bg-top bg-no-repeat shadow-[inset_0px_-10px_20px_0px_rgba(20,20,20,0.10)] png_sm:block md:hidden"
          style={{ backgroundImage: `url(${bannerImage_md})` }}
        />
        <img
          className="absolute left-[9px] -bottom-[1px] z-10 hidden png_sm:block md:hidden"
          src={White_bg_md}
          alt="White Background"
        />
        <div
          className="absolute inset-0 mx-auto hidden w-[calc(100%-28px)] rounded-[35px] bg-cover  bg-top bg-no-repeat shadow-[inset_0px_-10px_20px_0px_rgba(20,20,20,0.10)] md:block"
          style={{ backgroundImage: `url(${bannerImage_lg})` }}
        />
        <img
          className="absolute left-[9px] bottom-0 z-10 hidden  md:block"
          src={White_bg_lg}
          alt="White Background"
        />
        {awardImage && <div
          className="absolute left-[12px] top-[40px] png_sm:top-[60px] md:top-[69px] h-[53px] w-[106px] png_sm:w-[128px] png_sm:h-[64px] md:w-[142px] md:h-[71px] rounded-br-[10px] rounded-tr-[10px] bg-cover md:left-[14px]"
          style={{ backgroundImage: `url(${awardImage})` }}
        />}
        <div className="absolute bottom-[18px] right-[23px] flex flex-nowrap justify-end gap-[14px] png_sm:bottom-[28px] png_sm:right-[48px] md:bottom-[34px] md:right-[64px] md:gap-[20px]">
          {tagList.map((tag, index) => (
            <div
              key={index}
              className="whitespace-nowrap rounded-full border border-pure_white/60 bg-gray_5_black/40 px-[22px] pb-[8px] pt-[6px] font-noto text-[14px] font-normal leading-[160%] tracking-[0.08em] text-gray_0 backdrop-blur-[2px] md:px-[24px] md:text-[16px]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-20 mt-[40px] flex pl-[23px] png_sm:mt-[-7px] png_sm:justify-between png_sm:pl-[46px] png_sm:pr-[28px] md:mt-[-3.5px] md:pl-[88px] md:pr-[40px]">
        <div>
          <div className="flex">
            <div
              className="mr-[10px] rounded-[18px] px-[14px] pb-[4px] pt-[2px]  md:pb-[5px] md:pt-[4px]"
              style={{ backgroundColor: categoryColor }}
            >
              <span className="font-futura text-[15px] font-medium leading-[160%] tracking-[0.08em] text-pure_white md:text-[17px]">
                {category}
              </span>
            </div>
            <p className="font-sarabun text-[18px] font-light italic leading-[180%] tracking-[0.08em] text-gray_5_black md:text-[20px]">
              {subtitle}
            </p>
          </div>
          <div className="lg:flex lg:items-baseline">
            <h3 className="mt-[8px] w-[277px] whitespace-pre-line font-noto text-[32px]  font-normal leading-[160%] tracking-[0.08em] text-gray_5_black png_sm:w-full png_sm:whitespace-nowrap png_sm:text-[36px] md:mt-[10.5px] md:text-[40px]">
              {title}
            </h3>
            <div className="flex flex-nowrap items-baseline lg:ml-[20px] lg:mt-[23px]">
              <span className="mr-[4px] font-noto text-[23px] font-normal leading-[180%] tracking-[0.08em] text-gray_5_black lg:mr-0">
                /
              </span>
              <span className="text-nowrap font-noto text-[14px] font-normal leading-[180%] tracking-[0.08em] text-gray_5_black md:text-[16px]">
                {description}
              </span>
            </div>
          </div>
        </div>
        <img
          className="mt-[57px] hidden  h-[70px] w-[164px] png_sm:block md:mt-[43.5px] md:h-[76px] md:w-[178px]"
          src={iconImage}
          alt="Icon"
        />
      </div>
    </>
  );
};

ProjectBanner.propTypes = {
  bannerImage_lg: PropTypes.string.isRequired,
  bannerImage_md: PropTypes.string.isRequired,
  bannerImage_sm: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  awardImage: PropTypes.string,
  tagList: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectBanner;
