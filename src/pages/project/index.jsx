import propsTypes from "prop-types";
import CallToAction from "Pages/landing/callToAction";
import Footer from "Components/layout/Footer";

import River from "./river";
import Rethink from "./rethink";
import GreenFinancing from "./greenFinancing";

const componentsList = {
  river: River,
  rethink: Rethink,
  greenFinancing: GreenFinancing,
};

const PageContent = ({ id }) => {
  const Component = componentsList[id] || null;
  return <>{Component ? <Component /> : <div>Invalid ID</div>}</>;
};

const Index = ({ id }) => {
  return (
    <>
      <PageContent id={id} />
      <CallToAction />
      <Footer />
    </>
  );
};

PageContent.propTypes = {
  id: propsTypes.string.isRequired,
};

Index.propTypes = {
  id: propsTypes.string.isRequired,
};

export default Index;
