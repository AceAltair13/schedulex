import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ClassIcon from "@mui/icons-material/Class";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const DrawerList = () => {
    const router = useHistory();
    return (
        <List>
            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard")}
            >
                <ListItemIcon>
                    <DashboardIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard/institute-details")}
            >
                <ListItemIcon>
                    <AccountBalanceIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Institute" />
            </ListItem>

            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard/classroom-details")}
            >
                <ListItemIcon>
                    <ClassIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Classrooms" />
            </ListItem>

            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard/course-details")}
            >
                <ListItemIcon>
                    <BadgeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Courses" />
            </ListItem>

            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard/teacher-details")}
            >
                <ListItemIcon>
                    <SchoolIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>

            <ListItem
                button
                sx={{ pl: 3 }}
                onClick={() => router.push("/dashboard/subject-details")}
            >
                <ListItemIcon>
                    <SubjectIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
        </List>
    );
};

function DashboardLayout({ title, children }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box sx={{ p: 2, mb: 7 }}>
                <Typography
                    variant="h4"
                    sx={{ flexGrow: 1 }}
                    fontWeight="fontWeightBold"
                    textAlign="center"
                >
                    ScheduleX
                </Typography>
            </Box>
            <DrawerList />
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                elevation={0}
                color="inherit"
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        fontWeight="fontWeightBold"
                        noWrap
                        component="div"
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Container>
                    <Toolbar />
                    <Box pt={4}>{children}</Box>
                </Container>
            </Box>
        </Box>
    );
}

export default DashboardLayout;
