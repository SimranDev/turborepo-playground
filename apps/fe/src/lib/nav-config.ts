import DashboardIcon from "@mui/icons-material/Dashboard";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

type NavConfig = {
  title: string;
  path: string;
  icon?: string;
  isCompleted?: boolean;
};

export const generalNavConfig: NavConfig[] = [
  { title: "Dashboard", path: "/dashboard", icon: "Dashboard" },
  {
    title: "Home Loan Options",
    path: "/home-loan-options",
    icon: "OtherHouses",
  },
  { title: "Documents", path: "/documents", icon: "TextSnippet" },
  { title: "Account", path: "/account", icon: "Person" },
];

export const applicationNavConfig: NavConfig[] = [
  { title: "Property Details", path: "/property-details" },
  { title: "Borrowers", path: "/borrowers" },
  { title: "Deposit", path: "/deposit" },
  { title: "Assets", path: "/assets" },
  { title: "Liabilities", path: "/liabilities" },
  { title: "Household", path: "/household" },
  { title: "Loan Amount", path: "/loan-amount" },
  { title: "Notes", path: "/notes" },
  { title: "Trust Deed", path: "/trust-deed" },
  { title: "Bank Statements", path: "/bank-statements" },
  { title: "Loan Term", path: "/loan-term" },
];

export const applicantNavConfig: NavConfig[] = [
  { title: "Personal Details", path: "/personal-details" },
  { title: "Address History", path: "/address-history" },
  { title: "Employment History", path: "/employment-history" },
  { title: "Income", path: "/income" },
];
