// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import DepressionPage from '../../components/header/treatments/DepressionPage.jsx';

const TreatmentRoutes = (
  <>
    <Route path="/depression" element={<DepressionPage />} />
  </>
);

export default TreatmentRoutes;
