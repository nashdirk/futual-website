import { useModal } from "Store/modalContext";
import Banner from "./banner";
import Slogan from "./slogan";
import Process from "./process";
import Steps from "./steps";
import Partners from "./partners";
import Area from "./area";
import Clients from "./clients";
import Logos from "./logos";
import CallToAction from "./callToAction";
import Modal from "./modal";
// import CookieConsent from "./cookieConsent";
import ModalBanner from "./modalBanner";

const Landing = () => {
  const { isModalOpen } = useModal();
  
  return (
    <div className="relative">
      <div className={`text-center ${isModalOpen ? "opacity-5" : ""}`} >
        <Banner />
        <Slogan />
        <Process />
        <div className="min-h-[300dvh]">
          <Steps />
        </div>
        <Partners />
        <Area />
        <Clients />
        <Logos />
        <CallToAction />
      </div>
      <Modal />
      <ModalBanner />
    </div>
  );
};

export default Landing;
