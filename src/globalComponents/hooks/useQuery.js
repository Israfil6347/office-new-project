import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthUserContext from 'global_shared/contexts/AuthUserContext';

function useQuery(url, body, options) {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { clearAuthUserData } = useContext(AuthUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, body, options)
      .then((response) => {
        if (response.data.Status === 'success') {
          const responseData = JSON.parse(response.data.Data);
          setData(responseData);
          setHeaders(response.headers);
        } else {
          setError(response.data.Message);
          if (response.data.Message?.includes('denied')) {
            clearAuthUserData();
            navigate('/');
          }
        }
      })
      .catch((exception) => {
        setError(exception.Message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, headers, loading, error };
}

export default useQuery;
