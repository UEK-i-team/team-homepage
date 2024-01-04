import React, { useState } from 'react';

import { ItemTile } from '../components/ItemTile/ItemTile';
import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => {
  const [visible, setVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggle = () => {
    setVisible((prev) => !prev);
  };
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      <TitleText />
      <button onClick={toggle}>Menu</button>
      <br></br>
      <button onClick={toggleTheme}>ciemny</button>
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <SidebarMenu
        isSidebarMenuVisible={visible}
        setIsSidebarMenuVisible={setVisible}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
