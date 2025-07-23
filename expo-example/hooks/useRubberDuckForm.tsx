import { useState } from 'react';
import validateField from '@/utils/validateField';

const useRubberDuckForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    color: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };
  const isFormValid = () => {
    return Object.values(errors).every(error => !error) && 
           Object.values(formData).every(value => value.trim() !== '');
  };
  return {
    handleInputChange,
    formData,
    errors,
    isFormValid,
  };
};

export default useRubberDuckForm;