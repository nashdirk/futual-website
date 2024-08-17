import PropTypes from "prop-types";

const SubTitleText = ({ title, content }) => {

  return (
    <div className="text-center">
      <h2
        data-aos="fade-in"
        data-aos-duration="700"
        className="font-jost text-[40px] font-light leading-[160%] tracking-[0.1em] text-gray_5_black sm:text-[50px] md:text-[54px]"
      >
        {title}
      </h2>
      <p
        data-aos="fade-in"
        data-aos-duration="700"
        data-aos-delay="500"
        className="mt-[6px] whitespace-pre-line font-noto text-[15px] font-normal leading-[180%] tracking-[0.11em] text-gray_5_black sm:mt-[8px] md:mt-[10px] md:text-[16px]"
      >
        {content}
      </p>
    </div>
  );
};

SubTitleText.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SubTitleText;
