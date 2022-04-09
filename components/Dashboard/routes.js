import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ClassIcon from "@mui/icons-material/Class";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";

const routes = [
    {
        icon: DashboardIcon,
        title: "Dashboard",
        route: "/dashboard",
    },
    {
        icon: AccountBalanceIcon,
        title: "Institute Details",
        route: "/dashboard/institute-details",
    },
    {
        icon: ClassIcon,
        title: "Classroom Details",
        route: "/dashboard/classroom-details",
    },
    {
        icon: BadgeIcon,
        title: "Course Details",
        route: "/dashboard/course-details",
    },
    {
        icon: SchoolIcon,
        title: "Teacher Details",
        route: "/dashboard/teacher-details",
    },
    {
        icon: SubjectIcon,
        title: "Subject Details",
        route: "/dashboard/subject-details",
    },
];

export default routes;
