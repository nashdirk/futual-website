import ProjectBanner from "Components/projects/banner";
import Banner_lg from "Assets/img/projects/greenFinancing/hero 1440.jpg";
import Banner_md from "Assets/img/projects/greenFinancing/hero 768.jpg";
import Banner_sm from "Assets/img/projects/greenFinancing/hero 390.jpg";
import Icon from "Assets/img/projects/greenFinancing/greenFinancing_icon.jpg";

const GreenFinancingBanner = () => {
  return (
    <ProjectBanner
      bannerImage_lg={Banner_lg}
      bannerImage_md={Banner_md}
      bannerImage_sm={Banner_sm}
      iconImage={Icon}
      tagList={["企業CSR", "綠色金融", "大眾教育"]}
      title={`第一銀行\n綠色金融教育館`}
      subtitle="Green Finance"
      category="SDG13"
      categoryColor="#48773C"
      description="展場設計·動畫設計·互動設計"
    />
  );
};

export default GreenFinancingBanner;
