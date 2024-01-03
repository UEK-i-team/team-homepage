import React from 'react';

import { background, container, h1, p } from '../WhoWeAre/WhoWeAre.module.scss';

export const WhoWeAre = () => {
  return (
    <section className={`${container}`}>
      <div className={`${background}`}>
        <h1 className={`${h1}`}>Kim jesteśmy?</h1>
        <p className={`${p}`}>
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
