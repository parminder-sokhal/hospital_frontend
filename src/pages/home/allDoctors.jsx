import React from 'react';
import { Route } from 'react-router-dom';
import DoctorNeeraj from '../../components/home/alldoctors/doctorprofile';

const allDoctors = (
  <>
    <Route path="/dr-neeraj" element={<DoctorNeeraj />} />
  </>
);

export default allDoctors
