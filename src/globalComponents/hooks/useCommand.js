import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import AuthUserContext from 'global_shared/contexts/AuthUserContext';

function useCommand() {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const { clearAuthUserData } = useContext(AuthUserContext);
  const navigate = useNavigate();

  const executeCommand = (url, body, options) => {
    setLoading(true);
    axios
      .post(url, body, options)
      .then((response) => {
        setStatus(response.data.Status);
        if (response.data.Status === 'success') {
          setMessage(response.data.Message);
          var responseData;
          try {
            responseData = JSON.parse(response.data.Data);
          } catch (error) {
            responseData = response.data.Data;
          }

          setData(responseData);
          setHeaders(response.headers);
        } else {
          setMessage(response.data.Message);
          setError(response.data.Message);
          if (response?.data?.Message?.includes('denied')) {
            clearAuthUserData();
            navigate('/');
          }
        }
      })
      .catch((exception) => {
        setMessage(exception.message);

        setStatus('failed');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    setData,
    message,
    status,
    setStatus,
    setMessage,
    headers,
    loading,
    error,
    setError,
    executeCommand
  };
}

export default useCommand;
