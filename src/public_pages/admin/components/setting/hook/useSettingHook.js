import React from 'react';
import { useState } from 'react';
import { settingValidation } from '../validation/settingValidation';

function useSettingHook() {
  const [settingAdd, setSettingAdd] = useState({
    OrganizationName: '',
    OrganizationShortName: '',
    Slogan: '',
    address: '',
    hrEmail: '',
    hrSupportEmail: '',
    technicalSupportEmail: '',
    fax: '',
    hRContactNo: '',
    customerSupportContactNo: '',
    technicalSupportContactNo: '',
    officeHour: '',
    facebookPage: '',
    messengerLink: '',
    youtubeChanel: '',
    featuredVideoEmbeddedLink: '',
    NewOriginalLogo: '',
    ApplicantPhoto: '',
    error: {
      OrganizationName: '',
      OrganizationShortName: '',
      Slogan: '',
      address: '',
      hrEmail: '',
      hrSupportEmail: '',
      technicalSupportEmail: '',
      fax: '',
      hRContactNo: '',
      customerSupportContactNo: '',
      technicalSupportContactNo: '',
      officeHour: '',
      facebookPage: '',
      messengerLink: '',
      youtubeChanel: '',
      featuredVideoEmbeddedLink: '',
      NewOriginalLogo: '',
      ApplicantPhoto: ''
    }
  });

  const updateSettingStateHandler = (fieldName, fieldValue) => {
    setSettingAdd((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        error: {
          ...prevState.error,
          [fieldName]: settingValidation(fieldName, fieldValue)
        }
      };
    });
  };

  return { settingAdd, setSettingAdd, updateSettingStateHandler };
}

export default useSettingHook;
