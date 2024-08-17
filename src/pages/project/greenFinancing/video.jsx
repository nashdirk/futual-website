import VideoPlayer from "Components/videoPlayer";
import VideoPoster from "Assets/img/projects/greenFinancing/video cover 1440.jpg";

const Video = () => {
  return (
    <div className="mb-[100px] mt-[120px] w-full sm:mb-[120px] sm:mt-[140px] sm:px-[50px] md:mb-[140px] md:mt-[180px]">
      <div className="max-h-[630px]"><VideoPlayer poster={VideoPoster} src={"https://res.cloudinary.com/ddvo0bnca/video/upload/v1721193900/green_tzjmxc.mp4"} /></div>
    </div>
  );
};

export default Video;
