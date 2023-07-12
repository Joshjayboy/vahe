import * as React from "react";
import List from "@mui/material/List";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SidebarItem from "./SidebarItem";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { v4 as uuid } from "uuid";
import Home from "../sidebar-components/Home";
import Orders from "../sidebar-components/Orders";
import Subscriptions from "../sidebar-components/Subscriptions";
import { Box, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function AdminSidebar() {
  const updateSidebar = (item) => {
    return item.open === null
      ? null
      : setSidebar(
          sidebar.map((oldItem) => {
            if (item.id === oldItem.idl) {
              return !item.open, item;
            } else {
              return oldItem;
            }
          })
        );
  };

  let callComponent = (item) => {
    setSidebar(
      sidebar.map((oldItem) => {
        if (item.id === oldItem.id) {
          return (item.isComponentOpened = true), item;
        } else {
          return (oldItem.isComponentOpened = false), oldItem;
        }
      })
    );
  };
  const [sidebar, setSidebar] = React.useState([
    {
      name: "Home",
      icon: <HomeOutlinedIcon />,
      id: uuid(),
      open: null,
      isComponentOpened: true,
      component: <Home />,
    },
    {
      name: "Orders",
      icon: <MonetizationOnOutlinedIcon />,
      open: false,
      id: uuid(),
      isComponentOpened: false,
      component: <Orders />,
    },
    {
      name: "Subscriptions",
      icon: <RepeatOutlinedIcon />,
      id: uuid(),
      open: null,
      isComponentOpened: false,
      component: <Subscriptions />,
    },
    {
      name: "Customers",
      icon: <PeopleAltOutlinedIcon />,
      id: uuid(),
      open: null,
      isComponentOpened: false,
    },
    {
      name: "Products",
      icon: <ShoppingBagOutlinedIcon />,
      open: false,
      id: uuid(),
      isComponentOpened: false,
    },
    {
      name: "Discounts",
      icon: <SellOutlinedIcon />,
      open: false,
      id: uuid(),
      isComponentOpened: false,
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      <List
        sx={{
          width: "100%",
          maxWidth: "30%",
          height: "100vh",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexShrink: 0,
          overflow: "visible",
        }}
        component="nav"
        aria-labelledby="nested-list"
      >
        <div>
          <img
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              marginBottom: "10%",
            }}
            src="https://freepngimg.com/thumb/dog/33-dog-png-image-thumb.png"
          />
          {sidebar.map((item) => {
            return (
              <SidebarItem
                key={uuid()}
                item={item}
                updateSidebar={updateSidebar}
                callComponent={callComponent}
              />
            );
          })}
          <Divider />
        </div>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <Avatar alt="image" src="/static/images/avatar/1.jpg" />
            <span>
              {JSON.parse(sessionStorage.getItem("loggedInUser")).firstname}
            </span>
            <span>
              {JSON.parse(sessionStorage.getItem("loggedInUser")).lastname}{" "}
            </span>
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </List>
      <div style={{ width: "70%", maxHeight: "100vh", overflow: "auto" }}>
        {sidebar.map((item) => {
          return (
            <React.Fragment key={uuid()}>
              {!!item.isComponentOpened && item.component}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
