import React from "react";
import styled from "styled-components";
import { useToggleTheme } from "hooks/useToggleThemeContext";
import LightButton from "components/LightButton";
import NotificationsIcon from "svgs/menu-icons/notifications.svg";
import DarkModeIcon from "svgs/menu-icons/dark-mode.svg";
import LightModeIcon from "svgs/menu-icons/light-mode.svg";
import HelpIcon from "svgs/menu-icons/help.svg";
import SettingsIcon from "svgs/menu-icons/settings.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const ButtonContainer = styled.div`
  min-height: 32px;
  display: flex;
  align-items: center;
`;

const Menu: React.FC = () => {
  const [theme, toggleTheme] = useToggleTheme();
  const isLightTheme = theme === "light";
  const buttons = [
    { text: "", key: "Notification", Icon: NotificationsIcon },
    { text: "", key: "Settings", Icon: SettingsIcon },
    { text: "", key: "Help", Icon: HelpIcon },
    {
      text: "",
      key: "Theme",
      Icon: isLightTheme ? DarkModeIcon : LightModeIcon,
      onClick: () => toggleTheme(),
    },
  ];

  return (
    <Container>
      {buttons.map(({ text, key, Icon, onClick }) => (
        <ButtonContainer key={key}>
          <LightButton {...{ text, onClick, Icon }} />
        </ButtonContainer>
      ))}
    </Container>
  );
};

export default Menu;
