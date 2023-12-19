import React from 'react';

import { container, menu } from './SidebarMenu.module.scss';

export const SidebarMenu = () => {
  return (
    <div className={container}>
      {/* <div className={close}></div> */}
      <div>
        <ul className={menu}>
          <li>HOME</li>
          <li>
            PROJEKTY
            <ul>
              <li>MAPA UCZELNI</li>
              <li>TAJNY PROJEKT PROJEKT 339</li>
            </ul>
          </li>
          <li>AKTUALNOŚCI</li>
          <li>DOŁĄCZ DO NAS</li>
          <li>KONTAKT</li>
        </ul>
      </div>
    </div>
  );
};
