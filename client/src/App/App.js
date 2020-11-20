import './App.css';
import React from 'react';
import { FunctionContextComponent } from '../components/FunctionContextComponent/FunctionContextComponent';
import { PatientInfoProvider } from '../PatientInfoProvider';


export default function App() {
  return (
    <PatientInfoProvider>
      <FunctionContextComponent />
    </PatientInfoProvider>
  );
}

