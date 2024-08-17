import box1_sm from "Assets/img/projects/rethink/box1_390.jpg";
import box2_sm from "Assets/img/projects/rethink/box2_390.jpg";
import box3_sm from "Assets/img/projects/rethink/box3_390.jpg";
import box4_sm from "Assets/img/projects/rethink/box4_390.jpg";
import box5_sm from "Assets/img/projects/rethink/box5_390.jpg";
import box1_md from "Assets/img/projects/rethink/box1_768.jpg";
import box2_md from "Assets/img/projects/rethink/box2_768.jpg";
import box3_md from "Assets/img/projects/rethink/box3_768.jpg";
import box4_md from "Assets/img/projects/rethink/box4_768.jpg";
import box5_md from "Assets/img/projects/rethink/box5_768.jpg";
import box1_lg from "Assets/img/projects/rethink/box1_1440.jpg";
import box2_lg from "Assets/img/projects/rethink/box2_1440.jpg";
import box3_lg from "Assets/img/projects/rethink/box3_1440.jpg";
import box4_lg from "Assets/img/projects/rethink/box4_1440.jpg";
import box5_lg from "Assets/img/projects/rethink/box5_1440.jpg";
import BentoComponent from "Components/projects/bento";

const BoxList = [
  {
    id: 1,
    isFirst: true,
    isJost: true,
    imageSm: box1_sm,
    imageMd: box1_md,
    imageLg: box1_lg,
    textColor: "141414",
    title: "Re-Design",
    content: "讓人更想分類的垃圾桶，引導⺠眾\n更好的回收行為。",
  },
  {
    id: 2,
    isFirst: false,
    isJost: false,
    imageSm: box2_sm,
    imageMd: box2_md,
    imageLg: box2_lg,
    textColor: "141414",
    title: "實驗成效數字",
    content: "改造後民眾垃圾分類意願從 45.9% 提\n升至 87.8%。",
  },
  {
    id: 3,
    isFirst: false,
    isJost: false,
    imageSm: box3_sm,
    imageMd: box3_md,
    imageLg: box3_lg,
    textColor: "fff",
    title: "增加細分類",
    content: "整合前端分類和後端回收，\n新增常見類別。",
  },
  {
    id: 4,
    isFirst: false,
    isJost: false,
    imageSm: box4_sm,
    imageMd: box4_md,
    imageLg: box4_lg,
    textColor: "141414",
    title: "整合資訊設計",
    content: "結合資訊＋同理心＋指示元素，\n用設計驅動正確行動。",
  },
  {
    id: 5,
    isFirst: false,
    isJost: false,
    imageSm: box5_sm,
    imageMd: box5_md,
    imageLg: box5_lg,
    textColor: "141414",
    title: "外觀改造",
    content: "斜面設計與專屬開口，杜絕垃圾亂丟\n與堆置行為。",
  },
];

const Bento = () => {
  return (
    <BentoComponent BoxList={BoxList} />
  );
};

export default Bento;
