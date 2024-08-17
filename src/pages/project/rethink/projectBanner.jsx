import ProjectBanner from "Components/projects/banner";
import Banner_lg from "Assets/img/projects/rethink/banner_1440.jpg";
import Banner_md from "Assets/img/projects/rethink/banner_768.jpg";
import Banner_sm from "Assets/img/projects/rethink/banner_390.jpg";
import Award from "Assets/img/projects/rethink/award.jpg";
import Icon from "Assets/img/projects/rethink/rethink_icon.png";

const RethinkBanner = () => {
  return (
    <ProjectBanner
      bannerImage_lg={Banner_lg}
      bannerImage_md={Banner_md}
      bannerImage_sm={Banner_sm}
      iconImage={Icon}
      awardImage={Award}
      tagList={["循環減廢", "大眾教育"]}
      title="新北市政府垃圾桶改造計畫"
      subtitle="Trash Can RE-Design"
      category="SDG11"
      categoryColor="#F99D23"
      description="展場設計·工業設計·資訊設計"
    />
  );
}

export default RethinkBanner;
