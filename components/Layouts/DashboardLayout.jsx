import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ClassIcon from "@mui/icons-material/Class";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { useRouter } from "next/router";

const drawerWidth = 260;

export default function DashboardLayout({ title, children }) {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2, mb: 7 }}>
          <Image src={Logo} alt="logo" />
        </Box>
        <List>
          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard/institute-details")}
          >
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Institute Details" />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard/classroom-details")}
          >
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classroom Details" />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard/course-details")}
          >
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Course Details" />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard/teacher-details")}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Teacher Details" />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 3 }}
            onClick={() => router.push("/dashboard/subject-details")}
          >
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Subject Details" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Container>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </Box>
  );
}
