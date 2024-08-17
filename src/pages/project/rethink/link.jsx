const linkList = [
  {
    id: "1",
    text: "RE-Design 垃圾桶改造計畫 金點設計獎介紹專頁",
    link: "https://www.goldenpin.org.tw/zh-TW/winners/1359",
  },
  {
    id: "2",
    text: "讓回收正確率翻倍〈CSR在天下〉媒體報導",
    link: "https://csr.cw.com.tw/article/42935",
  },
  {
    id: "3",
    text: "公私協力改造垃圾桶設計 新北市政府新聞稿",
    link: "https://sdgs.ntpc.gov.tw/ch/home.jsp?id=703cd03eb5e556a0&act=be4f48068b2b0031&dataserno=777d32b94861ac6fe61e10d2fcc76e44",
  },
];

const Link = () => {
  return (
    <div className="my-[100px] text-center sm:my-[120px] md:my-[140px]">
      <h2 className="mb-[26px] font-jost text-[32px] font-light leading-[160%] tracking-[0.1em] text-gray_5_black sm:mb-[30px] sm:text-[40px] md:mb-[40px] md:text-[44px]">
        Related Links
      </h2>
      <ul className="text-center">
        {linkList.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              className="font-noto text-[15px] font-normal leading-[260%] tracking-[0.08em] text-gray_5_black underline md:text-[16px]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Link;
