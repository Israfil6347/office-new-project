import { isEmpty } from '../../../globalComponents/utils/validations';

export const PageDataValidation = (fieldName, fieldValue) => {
  switch (fieldName) {
    case 'jobLocation':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';
    default:
      return '';
  }
};
