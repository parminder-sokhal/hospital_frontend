// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import DepressionPage from '../../components/header/treatments/DepressionPage.jsx';
import Psychiatry from '../../components/header/treatments/Psychiatry.jsx';
import Anxiety from '../../components/header/treatments/Anxiety.jsx';
import BipolarDisorder from '../../components/header/treatments/BipolarDisorder.jsx';
import Schizophrenia from '../../components/header/treatments/Schizophrenia.jsx';
import OCD from '../../components/header/treatments/OCD.jsx';
import DeaddictionPrograms from '../../components/header/treatments/DeaddictionPrograms.jsx';
import SexualWellnessServices from '../../components/header/treatments/SexualWellnessServices.jsx';
import PsychiatricCare from '../../components/header/treatments/PsychiatricCare.jsx';

const TreatmentRoutes = (
  <>
    <Route path="/depression" element={<DepressionPage />} />
    <Route path="/psychiatry" element={<Psychiatry />} />
    <Route path="/anxiety" element={<Anxiety />} />
    <Route path="/bipolar-disorder" element={<BipolarDisorder />} />
    <Route path="/schizophrenia" element={<Schizophrenia />} />
    <Route path="/ocd" element={<OCD />} />
    <Route path="/deaddiction" element={<DeaddictionPrograms />} />
    <Route path="/sexual-wellness" element={<SexualWellnessServices />} />
    <Route path="/psychiatric-care" element={<PsychiatricCare />} />
  </>
);

export default TreatmentRoutes;
