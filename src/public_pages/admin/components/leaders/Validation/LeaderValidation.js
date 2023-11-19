import { isEmpty } from '../../../../../globalComponents/utils/validations';

export const LeaderValidation = (fieldName, fieldValue) => {
  switch (fieldName) {
    case 'name':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';
    default:
      return '';
  }
};
