import { useState } from 'react';
import FormContext from './FormContext';

function FormProvider( {children} ) {
  const [formData, setFormData] = useState({
    dashboardName: '',
    deviceName: '',
    sensorName: ''
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
