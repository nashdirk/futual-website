import Banner from "./projectBanner";
import Intro from "./intro";
import Bento from "./bento";
import Website from "./website";
import MobileElement from "./mobileElement";
import Strategy from "./strategy";
import Detail from "./detail";
import Result from "./result";

const GreenFinancing = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto"><Banner /></div>
      <Intro />
      <Bento />
      <Website />
      <MobileElement />
      <Strategy />
      <Detail />
      <Result />
    </>
  );
};

export default GreenFinancing;
