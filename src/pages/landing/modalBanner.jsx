import Rethink_Banner_lg from "Assets/img/projects/rethink/banner_1440.jpg";
import Rethink_Banner_md from "Assets/img/projects/rethink/banner_768.jpg";
import Rethink_Banner_sm from "Assets/img/projects/rethink/banner_390.jpg";
import GF_Banner_lg from "Assets/img/projects/greenFinancing/hero 1440.jpg";
import GF_Banner_md from "Assets/img/projects/greenFinancing/hero 768.jpg";
import GF_Banner_sm from "Assets/img/projects/greenFinancing/hero 390.jpg";
import River_Banner_lg from "Assets/img/projects/river/hero 1440.jpg";
import River_Banner_md from "Assets/img/projects/river/hero 768.jpg";
import River_Banner_sm from "Assets/img/projects/river/hero 390.jpg";

// 先載入圖片，避免在打開 modal 時才載入圖片造成畫面空白
const images = [
  Rethink_Banner_lg,
  Rethink_Banner_md,
  Rethink_Banner_sm,
  GF_Banner_lg,
  GF_Banner_md,
  GF_Banner_sm,
  River_Banner_lg,
  River_Banner_md,
  River_Banner_sm,
];

// 圖片不顯示
const ProjectBanner = () =>
  images.map((image, index) => (
    <img key={index} src={image} alt="" className="hidden" />
  ));

export default ProjectBanner;
