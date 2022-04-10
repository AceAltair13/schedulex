import AboutPage from "./pages/about";
import Dashboard from "./pages/dashboard";
import ClassroomDetails from "./pages/dashboard/classroom-details";
import CourseDetails from "./pages/dashboard/course-details";
import InstituteDetails from "./pages/dashboard/institute-details";
import SubjectDetails from "./pages/dashboard/subject-details";
import TeacherDetails from "./pages/dashboard/teacher-details";
import Home from "./pages/home";
import GeneratedTimetable from "./pages/dashboard/generated-timetable";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/dashboard/institute-details",
        component: InstituteDetails,
    },
    {
        path: "/dashboard/classroom-details",
        component: ClassroomDetails,
    },
    {
        path: "/dashboard/course-details",
        component: CourseDetails,
    },
    {
        path: "/dashboard/teacher-details",
        component: TeacherDetails,
    },
    {
        path: "/dashboard/subject-details",
        component: SubjectDetails,
    },
    {
        path: "/dashboard/generated-timetable",
        component: GeneratedTimetable,
    }
];

export default routes;
