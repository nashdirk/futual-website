import Album1_md from "Assets/img/projects/greenFinancing/album1 768_390.jpg";
import Album1_lg from "Assets/img/projects/greenFinancing/album1 1440.jpg";
import Album2_md from "Assets/img/projects/greenFinancing/album2 768_390.jpg";
import Album2_lg from "Assets/img/projects/greenFinancing/album2 1440.jpg";
import Album3_md from "Assets/img/projects/greenFinancing/album3 768_390.jpg";
import Album3_lg from "Assets/img/projects/greenFinancing/album3 1440.jpg";
import Album4_md from "Assets/img/projects/greenFinancing/album4 768_390.jpg";
import Album4_lg from "Assets/img/projects/greenFinancing/album4 1440.jpg";
import Album5_md from "Assets/img/projects/greenFinancing/album5 768_390.jpg";
import Album5_lg from "Assets/img/projects/greenFinancing/album5 1440.jpg";
import Album6_md from "Assets/img/projects/greenFinancing/album6 768_390.jpg";
import Album6_lg from "Assets/img/projects/greenFinancing/album6 1440.jpg";
import Album7_md from "Assets/img/projects/greenFinancing/album7 768_390.jpg";
import Album7_lg from "Assets/img/projects/greenFinancing/album7 1440.jpg";
import Album8_md from "Assets/img/projects/greenFinancing/album8 768_390.jpg";
import Album8_lg from "Assets/img/projects/greenFinancing/album8 1440.jpg";
import Album9_md from "Assets/img/projects/greenFinancing/album9 768_390.jpg";
import Album9_lg from "Assets/img/projects/greenFinancing/album9 1440.jpg";
import Album10_md from "Assets/img/projects/greenFinancing/album10 768_390.jpg";
import Album10_lg from "Assets/img/projects/greenFinancing/album10 1440.jpg";
import AlbumComponent from "Components/projects/Album";

const imageList = [
  {
    id: 1,
    mdSrc: Album1_md,
    lgSrc: Album1_lg,
    alt: "Album 1",
  },
  {
    id: 2,
    mdSrc: Album2_md,
    lgSrc: Album2_lg,
    alt: "Album 2",
  },
  {
    id: 3,
    mdSrc: Album3_md,
    lgSrc: Album3_lg,
    alt: "Album 3",
  },
  {
    id: 4,
    mdSrc: Album4_md,
    lgSrc: Album4_lg,
    alt: "Album 4",
  },
  {
    id: 5,
    mdSrc: Album5_md,
    lgSrc: Album5_lg,
    alt: "Album 5",
  },
  {
    id: 6,
    mdSrc: Album6_md,
    lgSrc: Album6_lg,
    alt: "Album 6",
  },
  {
    id: 7,
    mdSrc: Album7_md,
    lgSrc: Album7_lg,
    alt: "Album 7",
  },
  {
    id: 8,
    mdSrc: Album8_md,
    lgSrc: Album8_lg,
    alt: "Album 8",
  },
  {
    id: 9,
    mdSrc: Album9_md,
    lgSrc: Album9_lg,
    alt: "Album 9",
  },
  {
    id: 10,
    mdSrc: Album10_md,
    lgSrc: Album10_lg,
    alt: "Album 10",
  },
];
const Album = () => {
  return (
    <AlbumComponent imageList={imageList} />
  )
}

export default Album
