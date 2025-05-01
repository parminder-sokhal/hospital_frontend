// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import DepressionPage from '../../components/header/treatments/DepressionPage.jsx';
import Psychiatry from '../../components/header/treatments/Psychiatry.jsx';
import Anxiety from '../../components/header/treatments/Anxiety.jsx';
import BipolarDisorder from '../../components/header/treatments/BipolarDisorder.jsx';
import Schizophrenia from '../../components/header/treatments/Schizophrenia.jsx';
import OCD from '../../components/header/treatments/OCD.jsx';

const TreatmentRoutes = (
  <>
    <Route path="/depression" element={<DepressionPage />} />
    <Route path="/psychiatry" element={<Psychiatry />} />
    <Route path="/anxiety" element={<Anxiety />} />
    <Route path="/bipolar-disorder" element={<BipolarDisorder />} />
    <Route path="/schizophrenia" element={<Schizophrenia />} />
    <Route path="/ocd" element={<OCD />} />
  </>
);

export default TreatmentRoutes;
