import PropTypes from 'prop-types';

const Box = ({ className, children }) => (
  <div className={`bg-gray_2 rounded-4xl ${className}`}>
    {children}
  </div>
);

Box.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Bento = ({ contents }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {/* Desktop Layout */}
      <div className="hidden bento_lg:flex bento_lg:flex-wrap bento_lg:w-full bento_lg:justify-center bento_lg:gap-5">
        <div className="flex flex-col gap-5">
          <Box className="w-[740px] h-[380px] p-5">{contents[0]}</Box>
          <div className="flex gap-5">
            <Box className="w-[360px] h-[380px] p-5">{contents[2]}</Box>
            <Box className="w-[360px] h-[380px] p-5">{contents[3]}</Box>
          </div>
        </div>
        <Box className="w-[360px] h-[780px] p-5">{contents[1]}</Box>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex bento_lg:hidden flex-col items-center gap-5">
        <Box className="w-[668px] h-[340px] p-5">{contents[0]}</Box>
        <div className="flex gap-5">
          <Box className="w-[324px] h-[340px] p-5">{contents[2]}</Box>
          <Box className="w-[324px] h-[340px] p-5">{contents[3]}</Box>
        </div>
        <Box className="w-[668px] h-[340px] p-5">{contents[1]}</Box>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden gap-5">
        <Box className="flex flex-col w-[350px] p-[10px_30px_0px_30px] items-start h-[260px]">
          {contents[0]}
        </Box>
        <Box className="flex flex-col w-[350px] p-[10px_30px_0px_30px] items-start h-[260px]">
          {contents[1]}
        </Box>
        <Box className="flex flex-col w-[350px] p-[10px_30px_0px_30px] items-start h-[260px]">
          {contents[2]}
        </Box>
        <Box className="flex flex-col w-[350px] p-[10px_30px_0px_30px] items-start h-[260px]">
          {contents[3]}
        </Box>
      </div>
    </div>
  );
};

Bento.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Bento;