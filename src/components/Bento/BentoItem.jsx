import PropTypes from 'prop-types';

const BentoItem = ({ number, title, subtitle, backgroundImage, textColor }) => (
  <div
    className={`p-5 h-full w-full ${backgroundImage ? 'bg-cover bg-center' : ''}`}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
  >
    <h2 className={`font-noto text-[22px] md:text-[20px] sm:text-[19px] font-semibold leading-[200%] md:leading-[40px] sm:leading-[38px] tracking-[1.76px] md:tracking-[1.6px] sm:tracking-[1.52px] ${textColor || 'text-gray_5_black'}`}>
      {number} {title}
    </h2>
    <p className={`font-noto text-[15px] font-normal leading-[180%] tracking-[1.2px] ${textColor || 'text-gray_5_black'}`}>
      {subtitle}
    </p>
  </div>
);

BentoItem.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  textColor: PropTypes.string,
};

export default BentoItem;