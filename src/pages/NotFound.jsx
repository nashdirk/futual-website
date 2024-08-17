import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 h-screen-minus-100">
      <div className="flex flex-col items-center justify-center mt-24">
        <h2 className="text-4xl fw-bold mb-5 text-gray_5_black">404</h2>
        <h5 className="mb-5 text-gray_5_black">Oops! There is nothing.</h5>
      </div>
      <Link to="/" className="text-gradient">
        GO BACK TO OUR HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
