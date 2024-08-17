import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 h-screen-minus-100">
      <h2 className="text-4xl fw-bold mb-5 text-gray_5_black">Coming Soon.</h2>
      <h3 className="mb-5 text-gray_5_black"> 🌈 </h3>
      <Link to="/" className="text-gradient">
        GO BACK TO OUR HOMEPAGE
      </Link>
    </div>
  );
};

export default ComingSoon;
