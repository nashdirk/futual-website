const CreditsList = [
  {
    id: 1,
    title: "Project Lead /",
    name: "共生未來設計",
  },
  {
    id: 2,
    title: "Executive Producer /",
    name: "麓谷制作",
  },
];

const Credits = () => {
  return (
    <div className="mx-auto my-[100px] sm:my-[120px] md:my-[140px]">
      <h2 className="mb-[26px] text-center font-jost text-[32px] font-light leading-[160%] tracking-[0.1em] text-gray_5_black sm:mb-[30px] sm:text-[40px] md:mb-[40px] md:text-[44px]">
        Credits
      </h2>
      <ul className="mx-auto flex max-w-[235px] flex-col gap-x-[40px] gap-y-[8px] sm:max-w-[490px] sm:flex-row md:max-w-[540px] md:gap-x-[60px]">
        {CreditsList.map((item) => (
          <li key={item.id} className="">
            <div className="flex items-baseline justify-start">
              <span className="mr-[8px] font-sarabun text-[16px] font-light leading-[180%] tracking-[0.08em] md:mr-[10px] md:text-[17px]">
                {item.title}
              </span>
              <span className="font-noto text-[14px] font-normal leading-[200%] tracking-[0.08em] md:text-[15px]">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
