import React from 'react'
import MyButton from '../../globalComponents/components/MyButton';
import MyTextInput from '../../globalComponents/components/MyTextInput';
import logoIcon from '../../assets/Logo/logo.png'
import MyPasswordInput from '../../globalComponents/components/MyPasswordInput';

function LoginView({closeLoginWindow}) {
  return (
    <div>

          <div className="relative w-full overflow-hidden rounded-sm bg-surface py-6 px-6 shadow-sm md:px-10 lg:px-20">
        <MyButton
          onClick={() => {
            closeLoginWindow();
          }}
          styleClass="absolute top-1 right-0 w-10 font-semibold transition-all transform duration-300 hover:scale-150 origin-center  hover:text-error"
          label={''}
          name={''}
          type={undefined}
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </MyButton>
        <div className="flex w-full flex-col items-center text-onSurface">
          <div className="hover:animate-swing mb-6 flex w-full flex-col items-center hover:cursor-pointer">
            <img src={logoIcon} alt="" className="w-28" />
            <h2 className="text-center text-2xl font-extrabold uppercase">
              Member Login
            </h2>
            <h3 className="text-center text-sm">Login to your account</h3>
          </div>
          <form
            className="grid  w-full grid-cols-1 gap-4"
            // onSubmit={(event) => {
            //   event.preventDefault();
            //   handleLoginRequest();
            // }}
          >
            <MyTextInput
              label="User Id/Email"
              // value={loginViewInputState.userName}
              leftIcon={<i className="fa-solid fa-at"></i>}
              name="userName"
              id="username"
              required={true}
              // error={loginViewInputState.errors.userName}
              inputType="text"
              // onChangeHandler={(event) =>
              //   updateLoginViewInputState(event.target.name, event.target.value)
              // }
            />

            <MyPasswordInput
              label="User Password"
              // value={loginViewInputState.userPass}
              leftIcon={<i className="fa-solid fa-key"></i>}
              name="userPass"
              id="userPass"
              required={true}
              // error={loginViewInputState.errors.userPass}
              onChangeHandler={(event) => {
                // updateLoginViewInputState(
                //   event.target.name,
                //   event.target.value
                // );
              }}
            />

            <div className="flex flex-col gap-6 lg:flex-row">
              {/* <MyButton
                type="button"
                label="sign up"
                styleClass="w-full rounded bg-orange-50 border border-orange-700 px-7 py-3 text-sm font-medium uppercase text-error hover:bg-orange-700 shadow-md transition-all duration-150 hover:scale-105 hover:text-white"
                onClick={() => {
                  setOpenPhoneVerificationView(true);
                  localStorage.setItem('forgetPassword', 'Sign Up');
                }}
                name={''}
              /> */}
              <MyButton
                type="submit"
                label="Log in"
                styleClass="w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105"
                name={''}
              />
            </div>
          </form>
        </div>
        <div
          className="mt-5 cursor-pointer text-center transition duration-150 hover:underline"
          onClick={() => {
            // TermsConditionsHandler();
            // setOpenPhoneVerificationView(true);
            // localStorage.setItem('forgetPassword', 'Forget Password');
          }}
        >
          Forgotten password?
        </div>
        <div className="flex items-center justify-center pt-4 lg:flex-row">
          <MyButton
            type="button"
            label="sign up"
            styleClass="w-2/4 rounded bg-orange-50 border border-orange-700 px-7 py-3 text-sm font-medium uppercase text-error hover:bg-orange-700 shadow-md transition-all duration-150 hover:scale-105 hover:text-white"
            onClick={() => {
              // setOpenPhoneVerificationView(true);
              // TermsConditionsHandler();
              // localStorage.setItem('forgetPassword', 'Sign Up');
            }}
            name={''}
          />
        </div>
      </div>
      
    </div>
  )
}

export default LoginView


