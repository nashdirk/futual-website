import { useEffect, useState } from "react";
import Decline from "Assets/svg/decline.svg";

const Cookie = () => {
  const [cookieConsentVisible, setCookieConsentVisible] = useState(false);
  const consentStatus = localStorage.getItem("cookieConsent");

  useEffect(() => {
    // Check cookie consent status
    if (consentStatus === null) {
      setCookieConsentVisible(true);
    } else if (consentStatus === "agreed") {
      enableCookies();
    }
  }, [consentStatus]);

  const handleCookieConsent = (agreed) => {
    if (agreed) {
      enableCookies();
    } else {
      disableCookies();
    }
    localStorage.setItem("cookieConsent", agreed ? "agreed" : "declined");
    setCookieConsentVisible(false);
  };

  const enableCookies = () => {
    document.cookie = "necessary_cookie=true; path=/; max-age=31536000";
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    document.cookie = "advertising_cookie=true; path=/; max-age=31536000";
    console.log("Cookies enabled");
  };

  const disableCookies = () => {
    document.cookie =
      "advertising_cookie=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    console.log("Non-essential cookies disabled");
  };
  return (
    <div
      className={`fixed bottom-[20px] z-[50] flex w-full items-center justify-center font-sarabun text-[11px] font-light leading-[140%] tracking-[0.04em] md:justify-between md:px-[40px]`}
    >
      <div className="hidden text-gray_5_black md:block ">
        Copyright © FUTUAL Inc.
      </div>
      {cookieConsentVisible && (
        <div className="flex w-full items-center justify-center bg-[rgba(156,156,156,0.10)] pb-[8.5px] pt-[6.5px] backdrop-blur-[4px] md:w-auto md:rounded-[8px] md:px-[20px]">
          <span className="mx-[6px] text-[14px] text-[#626262]">
            This website uses cookies.
          </span>
          <button
            onClick={() => handleCookieConsent(true)}
            className="mr-[8px] rounded-[70px] bg-pure_white px-[12.5px] pb-[3.5px] pt-[2.5px] text-[14px] leading-[120%] tracking-[0.08em] text-gray_5_black"
          >
            OK
          </button>
          <img
            src={Decline}
            alt="decline"
            className="cursor-pointer"
            onClick={() => handleCookieConsent(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Cookie;
