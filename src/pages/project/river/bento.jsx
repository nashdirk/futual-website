import box1_sm from "Assets/img/projects/river/grid1 390.jpg";
import box2_sm from "Assets/img/projects/river/grid2 390.jpg";
import box3_sm from "Assets/img/projects/river/grid3 390.jpg";
import box4_sm from "Assets/img/projects/river/grid4 390.jpg";
import box5_sm from "Assets/img/projects/river/grid5 390.jpg";
import box1_md from "Assets/img/projects/river/grid1 768.jpg";
import box2_md from "Assets/img/projects/river/grid2 768.jpg";
import box3_md from "Assets/img/projects/river/grid3 768.jpg";
import box4_md from "Assets/img/projects/river/grid4 768.jpg";
import box5_md from "Assets/img/projects/river/grid5 768.jpg";
import box1_lg from "Assets/img/projects/river/grid1 1440.jpg";
import box2_lg from "Assets/img/projects/river/grid2 1440.jpg";
import box3_lg from "Assets/img/projects/river/grid3 1440.jpg";
import box4_lg from "Assets/img/projects/river/grid4 1440.jpg";
import box5_lg from "Assets/img/projects/river/grid5 1440.jpg";
import BentoComponent from "Components/projects/bento";

const BoxList = [
  {
    id: 1,
    isFirst: true, 
    isJost: false,
    imageSm: box1_sm,
    imageMd: box1_md,
    imageLg: box1_lg,
    textColor: "141414",
    title: "串連產官學民的行動平台",
    content: "了解企業/政府、民間組織及民眾需求，\n設計共同保護流域的機制。",
  },
  {
    id: 2,
    isFirst: false,
    isJost: false,
    imageSm: box2_sm,
    imageMd: box2_md,
    imageLg: box2_lg,
    textColor: "fff",
    title: "累積關鍵影響力",
    content: "透過平台號召與企業參與響應，\n持續累積關鍵影響力。",
  },
  {
    id: 3,
    isFirst: false,
    isJost: false,
    imageSm: box3_sm,
    imageMd: box3_md,
    imageLg: box3_lg,
    textColor: "141414",
    title: "量化展示行動成效",
    content: "建立雙重指標，展示企業行動所發揮\n的影響力和投入資源數。",
  },
  {
    id: 4,
    isFirst: false,
    isJost: false,
    imageSm: box4_sm,
    imageMd: box4_md,
    imageLg: box4_lg,
    textColor: "fff",
    title: "遊戲化公民參與",
    content: "通過遊戲化方式，激勵民眾參與\n流域保護，積分兌換獎勵。",
  },
  {
    id: 5,
    isFirst: false,
    isJost: false,
    imageSm: box5_sm,
    imageMd: box5_md,
    imageLg: box5_lg,
    textColor: "141414",
    title: "流域監控視覺化",
    content: "利用資料視覺化和插畫，了解流域\n污染現況及保護措施。",
  },
];

const Bento = () => {
  return (
    <BentoComponent BoxList={BoxList} />
  );
};

export default Bento;
