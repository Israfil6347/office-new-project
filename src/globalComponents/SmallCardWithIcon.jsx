import { NavLink } from 'react-router-dom';
import MyCard from './MyCard';

function SmallCardWithIcon({
  icon,
  action,
  actionLevel,
  heading,
  subHeading,
  bgColor = 'bg-surface',
  borderColor = 'border-gray-100',
  rounded = 'none' | 'full' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
  shadow = 'none' | 'md' | 'lg' | 'xl' | '2xl',
  children,
  height
}) {
  return (
    <>
      <MyCard
        bgColor={bgColor}
        borderColor={borderColor}
        rounded={rounded}
        shadow={shadow}
      >
        <NavLink to={action} className="">
          <div className={`group flex p-4 ${height}`}>
            <div className="flex flex-col items-center justify-center">
              {icon}
            </div>
            <div className="text-left ml-4 grow p-4 flex flex-col items-center justify-center">
              <p className="mb-1 font-bold ">{heading}</p>
              <p className="text-xs">{subHeading}</p>
              <div className="text-base">{children}</div>
              <div className="group-hover:underline group-hover:cursor-pointer">
                {actionLevel}
              </div>
            </div>
          </div>
        </NavLink>
      </MyCard>
    </>
  );
}

export default SmallCardWithIcon;
