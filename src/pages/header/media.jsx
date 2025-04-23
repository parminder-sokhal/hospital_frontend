// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Pictures from '../../components/header/media/pictures';
import Videos from '../../components/header/media/videos';
import Insta from '../../components/header/media/insta';

const media = (
  <>
    <Route path="/pictures" element={<Pictures />} />
    <Route path="/Youtube" element={<Videos />} />
    <Route path="/Instagram" element={<Insta />} />
  </>
);

export default media;
