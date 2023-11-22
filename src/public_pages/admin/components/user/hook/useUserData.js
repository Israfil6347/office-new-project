import { useState } from 'react';

import { UserValidation } from '../validation/UserValidation';

function useUserData() {
  const [UserInfoState, setUserInfoState] = useState({
    role: '',
    name: '',
    email: '',
    phone: '',
    newPassword: '',
    confirmPassword: '',
    errors: {
      role: '',
      name: '',
      email: '',
      phone: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const updateUserInfoStateHandler = (fieldName, fieldValue) => {
    setUserInfoState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: UserValidation(fieldName, fieldValue)
        }
      };
    });
  };

  return {
    UserInfoState,
    updateUserInfoStateHandler,
    setUserInfoState
  };
}

export default useUserData;
