import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Login from "../Login";
import Signup from "../Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { md: 450 },
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 2,
  py: 4,
};

const AccountMenu = () => {
  const [toggleAuth, setToggleAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [modalopen, setModalOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const modalOpen = () => setModalOpen(true);
  const modalClose = () => setModalOpen(false);

  return (
    <>
      <Box>
        <Tooltip title="Account">
          <IconButton
            color="inherit"
            onClick={handleClick}
            size="large"
            aria-label="account of current user"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <PersonOutlineIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemIcon>
              <PermIdentityOutlinedIcon fontSize="medium" />
            </ListItemIcon>
            My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={modalOpen}>
            <ListItemIcon>
              <LoginOutlinedIcon fontSize="small" />
            </ListItemIcon>
            login/signup
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            logout
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ pb: 5 }}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalopen}
          onClose={modalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalopen}>
            <Box sx={{ flexGrow: 1, width: 500 }}>
              <Box sx={style}>
                <Box textAlign="end">
                  <CloseOutlinedIcon
                    onClick={modalClose}
                    fontSize="small"
                    sx={{
                      cursor: "pointer",
                    }}
                  ></CloseOutlinedIcon>
                </Box>
                <Box sx={{ px: 4, pt: 0, pb: 4 }}>
                  {!toggleAuth ? (
                    <Login setToggleAuth={setToggleAuth} />
                  ) : (
                    <Signup setToggleAuth={setToggleAuth} />
                  )}
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
};

export default AccountMenu;
