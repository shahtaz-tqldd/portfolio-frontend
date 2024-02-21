import { MdOutlineCategory, MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandTrello } from "react-icons/tb";
import { RiFileInfoLine } from "react-icons/ri";
import { FaRegFolderClosed } from "react-icons/fa6";
import { CgFileDocument } from "react-icons/cg";

export const dsnavdata = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: MdOutlineDashboardCustomize,
  },
  {
    title: "Projects",
    link: "/dashboard/projects",
    icon: FaRegFolderClosed,
  },
  {
    title: "Skills",
    link: "/dashboard/skills",
    icon: MdOutlineCategory,
  },

  {
    title: "Blogs",
    link: "/dashboard/blogs",
    icon: CgFileDocument,
  },
  {
    title: "Work Experience",
    link: "/dashboard/work-experience",
    icon: TbBrandTrello,
  },
  {
    title: "Basic Info",
    link: "/dashboard/basic-info",
    icon: RiFileInfoLine,
  },
];
