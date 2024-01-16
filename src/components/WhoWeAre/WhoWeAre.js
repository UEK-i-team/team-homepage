import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import {
  backgroundDark,
  backgroundLight,
  container,
  h1Dark,
  h1Light,
  pDark,
  pLight,
} from '../WhoWeAre/WhoWeAre.module.scss';

export const WhoWeAre = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${container}`}>
      <div className={theme(backgroundLight, backgroundDark)}>
        <h1 className={theme(h1Light, h1Dark)}>Kim jesteśmy?</h1>
        <p className={theme(pLight, pDark)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          nisl sit amet porta vulputate, odio tellus bibendum sapien, ac
          convallis massa lorem sed neque. Praesent sodales ex nisi, vel
          imperdiet massa varius id. Vestibulum nec ultrices nulla, eu euismod
          nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Maecenas gravida lacus eu mattis tristique. Etiam porta fringilla
          urna, nec condimentum sapien luctus eget. Etiam iaculis, turpis vitae
          eleifend tincidunt, lacus nibh suscipit tortor, vitae molestie erat
          erat at ex. Fusce nec purus ac lectus iaculis congue.
        </p>
      </div>
    </section>
  );
};
