import { CheckCircle, Circle } from "@mui/icons-material";
import { alpha, Box, List, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { SIDEBAR } from "../../lib/config";
import {
  applicantNavConfig,
  applicationNavConfig,
  generalNavConfig,
} from "../../lib/nav-config";
import CollapsibleSidebarList from "../sidebar/CollapsibleSidebarList";
import SidebarListItem from "../sidebar/SidebarListItem";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, asPath } = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header onClickMenu={() => setMobileOpen(true)} />
      <Sidebar
        drawerOpen={mobileOpen}
        drawerOnClose={() => setMobileOpen(false)}
      >
        <List>
          <Box paddingBottom={3}>
            <Image
              src={"/assets/images/tella-logo.png"}
              layout="responsive"
              height={13}
              objectFit="contain"
              width={"100%"}
              objectPosition="left"
              alt="Logo"
            />
          </Box>
          {generalNavConfig.map((item) => (
            <SidebarListItem
              key={item.title}
              title={item.title}
              href={item.path}
              isActive={pathname === item.path}
              iconName={item.icon}
            />
          ))}
          <CollapsibleSidebarList title="YOUR APPLICATION">
            {applicationNavConfig.map((item) => (
              <SidebarListItem
                key={item.title}
                title={item.title}
                href={item.path}
                isActive={pathname === item.path}
                icon={isCompleted ? <CheckCircleStyled /> : <CircleStyled />}
              />
            ))}
          </CollapsibleSidebarList>
          <CollapsibleSidebarList title="MATHEW MALONE">
            {applicantNavConfig.map((item) => (
              <SidebarListItem
                key={item.title}
                title={item.title}
                href={item.path + "/mathew-malone"}
                isActive={asPath === item.path + "/mathew-malone"}
                icon={isCompleted ? <CheckCircleStyled /> : <CircleStyled />}
              />
            ))}
          </CollapsibleSidebarList>
        </List>
      </Sidebar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${SIDEBAR.WIDTH}px)` },
          backgroundColor: "secondary.main",
          paddingTop: 10,
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Layout;

const CheckCircleStyled = styled(CheckCircle)`
  font-size: ${SIDEBAR.ICON_SIZE};
`;

const CircleStyled = styled(Circle)`
  font-size: ${SIDEBAR.ICON_SIZE};
  color: ${alpha("#FFFFFF", 0.5)};
`;
