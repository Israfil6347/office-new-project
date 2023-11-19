import { useState } from 'react';
import { jobCircularValidation } from '../validition/jobCircularValidation';

function useJobCircular() {
  const [jobCircularDataState, setJobCircularState] = useState({
    jobPosition: '',
    slug: '',
    numberOfVacancy: '',
    employStatus: '',
    religion: '',
    ageRange: '',
    gender: '',
    jobLocation: '',
    salary: '',
    applicationDeadline: '',
    jobContext: '',
    jobResponsibility: '',
    experienceRequirements: '',
    additionalRequirement: '',
    compensationAndOtherBenefits: '',
    applicationInstruction: '',
    eduction: '',
    status: '',
    errors: {
      jobPosition: '',
      slug: '',
      numberOfVacancy: '',
      employStatus: '',
      religion: '',
      ageRange: '',
      gender: '',
      jobLocation: '',
      salary: '',
      applicationDeadline: '',
      jobContext: '',
      jobResponsibility: '',
      experienceRequirements: '',
      additionalRequirement: '',
      compensationAndOtherBenefits: '',
      applicationInstruction: '',
      eduction: '',
      status: ''
    }
  });

  const updateJobCircularStateHandler = (fieldName, fieldValue) => {
    setJobCircularState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: jobCircularValidation(fieldName, fieldValue)
        }
      };
    });
  };

  return {
    jobCircularDataState,
    updateJobCircularStateHandler,
    setJobCircularState
  };
}

export default useJobCircular;
