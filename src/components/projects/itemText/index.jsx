import PropTypes from "prop-types";

const ItemText = ({ title = "", subTitle = "", content = "", remark = "" }) => {
  return (
    <div className="mx-auto mb-[40px] px-[22px] sm:px-0 sm:mb-[50px] sm:max-w-[486px] md:mb-[60px] md:max-w-[694px]">
      {title && (
        <h3 className="title_e_small mb-[30px] text-center sm:mb-[40px] sm:text-[50px] md:mb-[50px] md:text-[54px]">
          {title}
        </h3>
      )}
      {subTitle && (
        <h4 className="mb-[20px] text-center font-noto text-[18px] font-normal leading-[180%] tracking-[0.24em] sm:mb-[30px]  sm:text-[20px] md:mb-[40px] md:text-[22px]">
          {subTitle}
        </h4>
      )}
      <p className="body_medium md:text-[16px] ">{content}</p>
      <br />
      {remark && (
        <p className="font-noto text-[12px] font-normal leading-[200%] tracking-[0.08em] text-[#626262] md:leading-[180%] ">
          {remark}
        </p>
      )}
    </div>
  );
};

ItemText.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  remark: PropTypes.string,
};

export default ItemText;
