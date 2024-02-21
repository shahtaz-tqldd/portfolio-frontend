import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../pages/Homepage/Homepage";
import Main from "../layouts/Main";
import Products from "../pages/Products/Products";
import Errorpage from "../components/Errorpage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectDashboard from "../pages/Dashboard/Projects/ProjectDashboard";
import SkillDashboard from "../pages/Dashboard/Skills/SkillDashboard";
import BlogDashboard from "../pages/Dashboard/Blogs/BlogDashboard";
import ExperienceDashboard from "../pages/Dashboard/Experience/ExperienceDashboard";
import BasicInfoPage from "../pages/Dashboard/Settings/BasicInfoPage";
import AddProject from "../pages/Dashboard/Projects/AddProject";
import WriteBlog from "../pages/Dashboard/Blogs/WriteBlog";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blogs",
        element: <Products />,
      },
      {
        path: "/projects",
        element: <Products />,
      },
    ],
  },
  // admin dashboard
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute allowedRoles={["admin", "super admin"]} path={"/"}>
      <DashboardLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/projects",
        element: <ProjectDashboard />,
      },
      {
        path: "/dashboard/project/new-project",
        element: <AddProject />,
      },
      {
        path: "/dashboard/skills",
        element: <SkillDashboard />,
      },
      {
        path: "/dashboard/blogs",
        element: <BlogDashboard />,
      },
      {
        path: "/dashboard/blogs/write-blog",
        element: <WriteBlog />,
      },
      {
        path: "/dashboard/work-experience",
        element: <ExperienceDashboard />,
      },
      {
        path: "/dashboard/basic-info",
        element: <BasicInfoPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);
