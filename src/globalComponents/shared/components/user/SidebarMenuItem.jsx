import { baseStringLogo } from 'global_shared/data/baseStringLogo';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { NavLink, useLocation } from 'react-router-dom';

function SidebarMenuItem({
  menuIcon,
  isSidebarMenuExpended,
  menuTitle,
  menuUrlSegment
}) {
  const { authUser, IsMenuExist } = useAuthUserAndMenu();
  const location = useLocation();
  var icon64 = menuIcon;
  if (menuIcon === null || menuIcon === '') {
    icon64 = baseStringLogo;
  }

  return (
    <>
      {IsMenuExist(menuTitle, authUser.WebPortalMenuList) && (
        <li className="group flex items-center justify-center font-semibold hover:bg-background">
          <NavLink
            to={menuUrlSegment}
            className={`p-2 w-full h-full ${
              location.pathname.includes(menuUrlSegment) &&
              'text-primary font-bold bg-background'
            }`}
          >
            <div
              className={`flex items-center ${
                isSidebarMenuExpended && 'justify-center'
              }`}
            >
              <img
                src={`data:image/png;base64, ${icon64}`}
                alt=""
                className="h-5"
              />
              {!isSidebarMenuExpended && (
                <div className="pl-2 h-full">{menuTitle}</div>
              )}
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
}

export default SidebarMenuItem;
