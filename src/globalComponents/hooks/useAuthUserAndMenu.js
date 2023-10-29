import { useContext } from 'react';
import AuthUserContext from 'global_shared/contexts/AuthUserContext';

function useAuthUserAndMenu() {
  const { authUser } = useContext(AuthUserContext);

  const IsMenuExist = (menuTitle) => {
    var found = false;
    authUser?.WebPortalMenuList?.forEach((element) => {
      const myMenusType = element?.MenuName?.toLowerCase()?.trim();
      if (myMenusType === menuTitle?.toLowerCase()?.trim()) {
        found = true;
      }
    });
    return found;
  };

  const GetMenu = (menuTitle) => {
    var found = null;
    authUser?.WebPortalMenuList?.forEach((element) => {
      const myMenusType = element?.MenuName?.toLowerCase()?.trim();
      if (myMenusType === menuTitle?.toLowerCase()?.trim()) {
        found = element;
      }
    });
    return found;
  };

  return {
    authUser,
    IsMenuExist,
    GetMenu
  };
}

export default useAuthUserAndMenu;
