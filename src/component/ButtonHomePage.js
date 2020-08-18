import React from "react";
import { useHistory } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const ButtonHomePage = () => {
  const history = useHistory();

  const homePage = () => history.push("/");
  return (
    <div>
      <button onClick={homePage}>
        <HomeOutlined />
      </button>
    </div>
  );
};
export default ButtonHomePage;
