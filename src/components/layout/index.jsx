import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Cursor from "Assets/img/cursor.png";

import Header from "./Header";
import Cookie from "./Cookie";
import Footer from "./Footer";

const CustomOutlet = styled.div`
  // cursor: url(${Cursor}), auto;
  // 先不加客制 cursor
`;

function Layout() {
  return (
    <div>
      <Header />
      <Cookie />
      <CustomOutlet>
        <Outlet />
      </CustomOutlet>
      <Footer />
    </div>
  );
}

export default Layout;
