import { useEffect, useRef } from "react";
import { useModal } from "Store/modalContext";
import CloseButton from "Components/closeButton";
import Logo from "Assets/svg/FUTUAL_logo_text.svg";
import Link from "Assets/svg/link_icon.svg";
import ProjectContent from "Pages/project";

const Modal = () => {
  const { isModalOpen, closeModal, modalText } = useModal();
  const modalRef = useRef(null);

  // 當 Modal 開啟時，禁止頁面滾動
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen && modalRef.current) {
      // 當 Modal 關閉時，將頁面滾動至最上方
      modalRef.current.scrollIntoView({ behavior: "smooth", delay: 800 });
    }
  }, [isModalOpen, modalRef]);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[60] h-[100vh] bg-gray_4 bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        />
      )}
      <div
        className={`fixed bottom-0 left-0  z-[70] h-[98vh] w-full transform overflow-y-auto bg-pure_white transition-transform duration-500 ease-in-out ${
          isModalOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div ref={modalRef} className="relative">
          <div className="sticky top-0 z-50 flex items-center justify-between bg-[rgba(250,250,250,0.20)] backdrop-blur-[8px] px-[20px] py-[11px] sm:px-[24px] md:px-[40px]">
            <img src={Logo} alt="Futual logo" />
            <div className="flex items-center gap-[16px]">
              <p className="font-sarabun text-[16px] font-normal leading-[160%] tracking-[0.08em] text-[#626262]">
                • Share
              </p>
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img src={Link} alt="Link" />
              </a>
              <CloseButton onClick={closeModal} />
            </div>
          </div>
          <div className="mt-[12px] md:mt-[16px] text-gray_5_black">
            <ProjectContent id={modalText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
