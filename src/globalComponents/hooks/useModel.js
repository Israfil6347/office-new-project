import { useState } from 'react';

function useModel() {
  const [data, setValue] = useState(true);
  const [message, setMessage] = useState(' This is success message ');
  const [Action, setAction] = useState();

  return { data, setValue, message, setMessage, Action, setAction };
}

export default useModel;
