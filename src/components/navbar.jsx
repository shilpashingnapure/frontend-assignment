import {
  ChevronRight,
  KeyboardArrowDown,
  NotificationsActiveOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./navbar.css";
import { SearchCompoent } from "./search";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex">
        <span>Home</span>
        <ChevronRight className="muted-icon" />
        <span className="active-link">Dashboard V1</span>
      </div>
      <div className="nav-items">
        <div className="search-box">
          <SearchCompoent />
        </div>

        <div className="flex">
          <span>dummy name</span>
          <KeyboardArrowDown className="muted-icon" />
        </div>

        <NotificationsActiveOutlined className="muted-icon" />
        <Avatar />
      </div>
    </nav>
  );
};

