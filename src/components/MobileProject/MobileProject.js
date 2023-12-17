import React from 'react';

import sampleImg from '../../assets/images/sampleProjectImg.png';
import {
  moblieProject,
  moblieProjectTitle,
  projectImg,
} from './MoblileProject.module.scss';

export const MoblieProject = () => {
  return (
    <>
      <img src={sampleImg} alt="project image" className={`${projectImg}`} />

      <h1 className={`${moblieProjectTitle}`}>Tytul projektu</h1>
      <div className={`${moblieProject}`}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros
            tellus, sollicitudin nec neque eget, rhoncus fringilla quam. Nullam
            fermentum augue eu pharetra elementum. Sed eu diam mauris. Aliquam
            vestibulum et ante ut pharetra. Quisque eget vestibulum sapien, eget
            ultrices odio. Suspendisse non pretium massa. Cras ultricies lacus
            quis congue semper. Nullam vel suscipit eros. Praesent lacinia
            mattis sem a cursus. Phasellus sodales id leo nec mattis. Etiam
            dictum suscipit quam et commodo. Ut sed quam eu mauris mattis
            tristique quis laoreet leo.
          </p>
          <p>
            Cras ultricies lacus quis congue semper. Nullam vel suscipit eros.
            Praesent lacinia mattis sem a cursus. Phasellus sodales id leo nec
            mattis. Etiam dictum suscipit quam et commodo. Ut sed quam eu mauris
            mattis tristique quis laoreet leo.
          </p>
        </div>
        <a href={'?'}>Zobacz nasz projekt w praktyce {/* ARROW */} &#10140;</a>
      </div>
    </>
  );
};
