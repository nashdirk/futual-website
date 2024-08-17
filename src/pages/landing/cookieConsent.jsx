import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (agreed) => {
    if (agreed) {
      // 用戶同意使用 cookies
      enableCookies();
    } else {
      // 用戶拒絕使用 cookies
      disableCookies();
    }
    localStorage.setItem('cookieConsent', agreed ? 'agreed' : 'declined');
    setIsVisible(false);
  };

  const enableCookies = () => {
    // 在這裡添加啟用 cookies 的邏輯
    console.log('Cookies enabled');
  };

  const disableCookies = () => {
    // 在這裡添加禁用 cookies 的邏輯
    console.log('Cookies disabled');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 xl:right-[30px] w-full xl:w-auto">
      <div className="inline-flex h-[40px] px-[20px] pb-[2px] flex-col justify-center items-start gap-[10px] flex-shrink-0 bg-pure_white xl:rounded-t-lg w-full xl:w-auto">
        <div className="flex items-center w-full">
          <span className="text-gray_4 font-sarabun text-[14px] font-light leading-[140%] tracking-[0.56px]">
            This website uses cookies.
          </span>
          <div className="flex items-center ml-[6px]">
            <button 
              onClick={() => handleConsent(true)}
              className="flex w-[44px] h-[23px] px-[10px] pb-[1px] justify-center items-center gap-[10px] rounded-[70px] bg-pure_white border border-gray_4"
            >
              <span className="text-gray_5_black font-sarabun text-[14px] font-light leading-[120%] tracking-[1.12px]">
                OK
              </span>
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="ml-[8px] text-gray_3 font-sarabun text-[14px] font-light leading-[120%] tracking-[1.12px]"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;