import React from "react";
import { useHistory } from "react-router-dom";
import { Menu, Divider } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const MenuShop = () => {
  const history = useHistory();

  const addingProduct = () => history.push("/addingProduct");
  const productUpdate = () => history.push("/productUpdate");
  const deleteProduct = () => history.push("/deleteProduct");

  return (
    <div className="menu">
      <>
        <Divider type="vertical" />
        <div className="menuTitle">Shop management and shopping</div>
        <br />
        <Menu style={{ width: 256 }} mode="inline">
          <Menu.Item key="1" icon={<CalendarOutlined />}>
            My shopping list
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<AppstoreOutlined />}
            title="Product management"
          >
            <Menu.Item key="2" onClick={addingProduct}>
              Adding a product
            </Menu.Item>
            <Menu.Item key="3" onClick={productUpdate}>
              Product update
            </Menu.Item>
            <Menu.Item key="4" onClick={deleteProduct}>
              Delete product
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="Shop settings">
            <Menu.Item key="6">Option 7</Menu.Item>
            <Menu.Item key="7">Option 8</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="8">Option 9</Menu.Item>
              <Menu.Item key="9">Option 10</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="10" icon={<MailOutlined />}>
            Contact Us
          </Menu.Item>
        </Menu>
      </>
    </div>
  );
};

export default MenuShop;
