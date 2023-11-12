import { useState } from 'react';
import { PageDataValidation } from '../Validation/PageDataValidation';

function usePageData() {
  const [PageDataState, setPageDataState] = useState({
    pageImage: '',
    title: '',
    order: '',
    slug: '',
    sortDescription: '',
    description: '',
    errors: {
      pageImage: '',
      title: '',
      order: '',
      slug: '',
      sortDescription: '',
      description: ''
    }
  });

  const updatePageDataStateHandler = (fieldName, fieldValue) => {
    setPageDataState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: PageDataValidation(fieldName, fieldValue)
        }
      };
    });
  };

  return {
    PageDataState,
    updatePageDataStateHandler,
    setPageDataState
  };
}

export default usePageData;
