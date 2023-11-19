import { useState } from 'react';
import { LeaderValidation } from '../Validation/LeaderValidation';

function useLeaders() {
  const [LeadersInfoState, setLeadersInfoState] = useState({
    name: '',
    committee: '',
    position: '',
    facebookProfile: '',
    linkedinProfile: '',
    leaderOrder: '',
    sortDescription: '',
    bio: '',
    errors: {
      name: '',
      committee: '',
      position: '',
      facebookProfile: '',
      linkedinProfile: '',
      leaderOrder: '',
      sortDescription: '',
      bio: ''
    }
  });

  const updateLeaderInfoStateHandler = (fieldName, fieldValue) => {
    setLeadersInfoState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: LeaderValidation(fieldName, fieldValue)
        }
      };
    });
  };

  return {
    LeadersInfoState,
    updateLeaderInfoStateHandler,
    setLeadersInfoState
  };
}

export default useLeaders;
