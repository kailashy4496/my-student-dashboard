// import GridViewIcon from "@mui/icons-material/GridView";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import { IoEyeOutline, IoSettingsOutline } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { FaRegCreditCard } from "react-icons/fa";

export const navigationLinks = [
  //   { id: 1, title: "Dashboard", icon: <GridViewIcon />, link: "/" },
  {
    id: 1,
    title: "Content",
    icon: <AddToPhotosOutlinedIcon />,
    link: "/content",
  },
  { id: 2, title: "People", icon: <Groups2OutlinedIcon />, link: "/people" },
  { id: 3, title: "Design", icon: <DrawOutlinedIcon />, link: "/design" },
  {
    id: 4,
    title: "Analytics",
    icon: <AnalyticsOutlinedIcon />,
    link: "/analytics",
  },
  {
    id: 5,
    title: "Communication",
    icon: <DraftsOutlinedIcon />,
    link: "/communication",
  },
  { id: 6, title: "Apps", icon: <PowerOutlinedIcon />, link: "/apps" },
  {
    id: 7,
    title: "Automation",
    icon: <FlashOnOutlinedIcon />,
    link: "/automation",
  },
];

export const yourAcademy = [
  { id: 1, title: "Preview School", icon: <IoEyeOutline /> },
  { id: 2, title: "Switch School", icon: <RxLoop /> },
  { id: 3, title: "School Setting", icon: <IoSettingsOutline /> },
  { id: 4, title: "Billing Portal", icon: <FaRegCreditCard /> },
];
