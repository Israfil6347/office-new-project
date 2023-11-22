import { isEmpty } from '../../../../../globalComponents/utils/validations';

export const settingValidation = (fieldName, fieldValue) => {
  switch (fieldName) {
    case 'OrganizationName':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';
    default:
      return '';
  }
};
