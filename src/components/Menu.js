import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
const { SubMenu } = Menu;

const MyMenu = () => {
  return (
    <>
      <br />
      <br />
      <Menu
        style={{ width: 240 }}
        mode="vertical"
        theme="light"
        triggerSubMenuAction="click"
      >
        <SubMenu icon={<LocalAtmIcon />} title="&nbsp;&nbsp;&nbsp;Master Data">
          <Menu.Item>Option 3</Menu.Item>
          <Menu.Item>Option 4</Menu.Item>
          <SubMenu title="Submenu">
            <Menu.Item>Option 5</Menu.Item>
            <Menu.Item>Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu
          icon={<MonetizationOnIcon />}
          title="&nbsp;&nbsp;&nbsp;Transaction"
        >
          <Menu.Item>Option 7</Menu.Item>
          <Menu.Item>Option 8</Menu.Item>
          <Menu.Item>Option 9</Menu.Item>
          <Menu.Item>Option 10</Menu.Item>
        </SubMenu>

        <SubMenu
          icon={<MonetizationOnIcon />}
          title="&nbsp;&nbsp;&nbsp;Cash management"
        >
          <Menu.Item>Option 7</Menu.Item>
        </SubMenu>

        <SubMenu
          icon={<EventAvailableIcon />}
          title="&nbsp;&nbsp;&nbsp;Settlement"
        >
          <Menu.Item>Option 10</Menu.Item>
        </SubMenu>

        <SubMenu
          icon={<AccountBalanceWalletIcon />}
          title="&nbsp;&nbsp;&nbsp;Accounting"
        >
          <Menu.Item>Option 10</Menu.Item>
        </SubMenu>

        <SubMenu icon={<ReceiptIcon />} title="&nbsp;&nbsp;&nbsp;Reporting">
          <Menu.Item>Option 10</Menu.Item>
        </SubMenu>

        <SubMenu
          icon={<SettingsIcon />}
          title="&nbsp;&nbsp;&nbsp;System Settings"
        >
          <Menu.Item>Option 10</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MyMenu;
