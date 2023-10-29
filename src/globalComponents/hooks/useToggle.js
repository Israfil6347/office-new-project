import { useState } from 'react';

export const useToggle = (defaultValue) => {
  const [openState, setOpenState] = useState(defaultValue);

  function toggleState() {
    setOpenState((previousState) => !previousState);
  }

  function changeOpenState(state) {
    console.log('clicked');
    setOpenState(state);
  }

  return [openState, toggleState, changeOpenState];
};
