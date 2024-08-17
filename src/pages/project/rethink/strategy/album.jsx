import Album1_md from "Assets/img/projects/rethink/album1 768_390.jpg";
import Album1_lg from "Assets/img/projects/rethink/album1 1440.jpg";
import Album2_md from "Assets/img/projects/rethink/album2 768_390.jpg";
import Album2_lg from "Assets/img/projects/rethink/album2 1440.jpg";
import Album3_md from "Assets/img/projects/rethink/album3 768_390.jpg";
import Album3_lg from "Assets/img/projects/rethink/album3 1440.jpg";
import Album4_md from "Assets/img/projects/rethink/album4 768_390.jpg";
import Album4_lg from "Assets/img/projects/rethink/album4 1440.jpg";
import Album5_md from "Assets/img/projects/rethink/album5 768_390.jpg";
import Album5_lg from "Assets/img/projects/rethink/album5 1440.jpg";
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
];

const Album = () => {
  return (
    <div className="px-[12px] md:px-[14px]">
      <AlbumComponent imageList={imageList} />
    </div>
  )
}

export default Album
