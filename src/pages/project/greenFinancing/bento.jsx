import box1_sm from "Assets/img/projects/greenFinancing/grid1 390.jpg";
import box2_sm from "Assets/img/projects/greenFinancing/grid2 390.jpg";
import box3_sm from "Assets/img/projects/greenFinancing/grid3 390.jpg";
import box4_sm from "Assets/img/projects/greenFinancing/grid4 390.jpg";
import box5_sm from "Assets/img/projects/greenFinancing/grid5 390.jpg";
import box1_md from "Assets/img/projects/greenFinancing/grid1 768.jpg";
import box2_md from "Assets/img/projects/greenFinancing/grid2 768.jpg";
import box3_md from "Assets/img/projects/greenFinancing/grid3 768.jpg";
import box4_md from "Assets/img/projects/greenFinancing/grid4 768.jpg";
import box5_md from "Assets/img/projects/greenFinancing/grid5 768.jpg";
import box1_lg from "Assets/img/projects/greenFinancing/grid1 1440.jpg";
import box2_lg from "Assets/img/projects/greenFinancing/grid2 1440.jpg";
import box3_lg from "Assets/img/projects/greenFinancing/grid3 1440.jpg";
import box4_lg from "Assets/img/projects/greenFinancing/grid4 1440.jpg";
import box5_lg from "Assets/img/projects/greenFinancing/grid5 1440.jpg";
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
    title: "由淺入深理解綠色金融",
    content: "從日常消費到產業融資，逐步引導\n觀者深入綠色金融。",
  },
  {
    id: 2,
    isFirst: false,
    isJost: false,
    imageSm: box2_sm,
    imageMd: box2_md,
    imageLg: box2_lg,
    textColor: "fff",
    title: "永續循環材料",
    content: "選用永續循環材料作為佈展素材。",
  },
  {
    id: 3,
    isFirst: false,
    isJost: false,
    imageSm: box3_sm,
    imageMd: box3_md,
    imageLg: box3_lg,
    textColor: "fff",
    title: "數位展示內容",
    content: "結合數位展示與互動機制，\n豐富觀展體驗。",
  },
  {
    id: 4,
    isFirst: false,
    isJost: false,
    imageSm: box4_sm,
    imageMd: box4_md,
    imageLg: box4_lg,
    textColor: "141414",
    title: "展間體驗亮點",
    content: "結合設計小巧思，導覽人員可適時\n穿插與觀眾的互動體驗。",
  },
  {
    id: 5,
    isFirst: false,
    isJost: false,
    imageSm: box5_sm,
    imageMd: box5_md,
    imageLg: box5_lg,
    textColor: "141414",
    title: "設計成果回饋",
    content: "參觀後，民眾對綠色金融的理解程度\n提升了33%。",
  },
];

const Bento = () => {
  return (
    <BentoComponent BoxList={BoxList} />
  );
};

export default Bento;
