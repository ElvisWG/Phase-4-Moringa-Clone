import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";




export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdDashboard />,
  },

  {
    title: "Assessment",
    path: "/createAssessment",
    icon: <FcIcons.FcDepartment />,
  },
  {
    title: "StudentList",
    path: "/studentlist",
    icon: <FaIcons.FaUsers />,
  },
  {
    title: "Invitation",
    path: "/invitation",
    icon: <MdIcons.MdInsertInvitation />,
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <MdIcons.MdOutlineReviews />,
  },
  // {
  //   title: "Routes",
  //   path: "/mainPageroutes",
  //   icon: <MdIcons.MdRequestPage />,
  // },
  {
    title: "Logout",
    path: "/",
    icon: <MdIcons.MdLogout />,
  },
];









