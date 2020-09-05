import React, { useContext } from "react";
import { Menu } from "antd";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "./components.css";
import { pinContext } from './Context';

const { SubMenu } = Menu;

const MyMenu = () => {

  // Use Pincontext
  const { pin } = useContext(pinContext);

  return (
    <>
      <br />
      <br />
      <Menu
        style={{ width: 300 }}
        mode="vertical"
        theme="light"
        triggerSubMenuAction="click"
      >
        {/* Transaction */}
        <Menu.Item className="menu-items">
          <MonetizationOnIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp; Transaction
        </Menu.Item>

        {/* Cash Management */}
        <Menu.Item className="menu-items">
          <AccountBalanceIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cash management
        </Menu.Item>

        {/* Settlement */}

        <Menu.Item className="menu-items">
          <EventAvailableIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settlement
        </Menu.Item>

        {/* Accounting */}

        <Menu.Item className="menu-items">
          <AccountBalanceWalletIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accounting
        </Menu.Item>

        {/* Reporting */}
        <Menu.Item className="menu-items">
          <ReceiptIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reporting
        </Menu.Item>

        {/* Master Data */}
        <SubMenu
          popupClassName={pin ? 'pinned-menu' : 'unpinned-menu'}
          className="menu-items"
          icon={<LocalAtmIcon fontSize="large" />}
          title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master Data"
        >
          <SubMenu title="General">
            <Menu.Item>User</Menu.Item>
          </SubMenu>
          <SubMenu title="Currency">
            <Menu.Item>Currencies</Menu.Item>
            <Menu.Item>Currency Conversion</Menu.Item>
            <Menu.Item>Bank Clearing Code</Menu.Item>
          </SubMenu>
          <SubMenu title="Location">
            <Menu.Item>Location</Menu.Item>
            <Menu.Item>Holiday Schedule</Menu.Item>
          </SubMenu>
          <SubMenu title="Company">
            <Menu.Item>Legal Entity</Menu.Item>
            <Menu.Item>Company</Menu.Item>
            <Menu.Item>Company Bank Account</Menu.Item>
            <Menu.Item>Company Account Type</Menu.Item>
          </SubMenu>
          <SubMenu title="Counterparty">
            <Menu.Item>Financial Institution</Menu.Item>
            <Menu.Item>CounterParty</Menu.Item>
            <Menu.Item>CounterParty Contact</Menu.Item>
            <Menu.Item>CounterParty Bank Account</Menu.Item>
          </SubMenu>
          <SubMenu title="User Defined Data">
            <Menu.Item>Portfolio</Menu.Item>
            <Menu.Item>Group</Menu.Item>
            <Menu.Item>User Defined Fields</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* System Settings */}
        <Menu.Item className="menu-items">
          <SettingsIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Settings
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MyMenu;
