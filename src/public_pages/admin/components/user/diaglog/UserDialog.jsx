import React from 'react';
import MyButton from '../../../../../globalComponents/components/MyButton';
import MyModal from '../../../../../globalComponents/components/MyModal';
import MyDialogueView from '../../../../../globalComponents/components/dialogues/MyDialogueView';
import MyInputBox from '../../../../../globalComponents/components/MyInputBox';
import MyDropdown from '../../../../../globalComponents/components/MyDropdown';
import MyPasswordInput from '../../../../../globalComponents/components/MyPasswordInput';
import useUserData from '../hook/useUserData';
import { useEffect } from 'react';
import { userData } from '../data/UserData';
const roleName = [
  {
    value: '01',
    label: 'Super Admin'
  },
  {
    value: '02',
    label: 'Admin'
  },
  {
    value: '03',
    label: 'Visitor'
  },
  {
    value: '04',
    label: 'Content Manager'
  },
  {
    value: '05',
    label: 'Content Creator'
  }
];

function UserDialog({
  UserDialogOpen,
  setUserDialogOpen,
  setUserInfo,
  setEditUserInfo,
  onlyShow,
  UserInfo,
  editUserInfo
}) {
  const { UserInfoState, updateUserInfoStateHandler, setUserInfoState } =
    useUserData();

  console.log(UserInfoState);

  useEffect(() => {
    if (onlyShow) {
      setUserInfoState(UserInfo);
    } else if (editUserInfo) {
      setUserInfoState(UserInfo);
    } else {
      setUserInfoState(userData);
    }
  }, [onlyShow, UserInfo, editUserInfo, UserDialogOpen]);

  return (
    <div>
      <MyModal
        show={UserDialogOpen}
        size="S"
        onClose={() => {
          setUserDialogOpen(false);
          setUserInfo(false);
          setEditUserInfo(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setUserDialogOpen(false);
            setUserInfo(false);
            setEditUserInfo(false);
          }}
          dialogueHeader={
            <div className="header flex   bg-background p-6 text-2xl font-bold text-onSurface">
              <img src="#" alt="" width="40" height="40" />
              <p className="ml-2 antialiased">Page</p>
            </div>
          }
          dialogueFooter={
            <div className="flex  justify-end gap-4 bg-background p-4 ">
              <MyButton
                type="button"
                name="yes"
                label={'submit'}
                // onClick={() => {
                //   var error = '';
                //   for (var fieldName in PageDataState) {
                //     updatePageDataStateHandler(
                //       fieldName,
                //       PageDataState[fieldName]
                //     );
                //     error = error + '';
                //     PageDataValidation(fieldName, PageDataState[fieldName]);
                //   }
                //   if (error) {
                //     window.scrollTo({
                //       top: window.innerHeight / 2,
                //       behavior: 'smooth'
                //     });
                //   }

                //   if (error.length === 0) {
                //     onSubmitHandler();
                //   }
                // }}
                styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/4"
              ></MyButton>
            </div>
          }
        >
          <div
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200  w-full overflow-y-scroll rounded-lg p-6 md:p-16 "
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                <MyDropdown
                  name="role"
                  label="Role"
                  id="roleId"
                  inputType="number"
                  dropDownData={roleName?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.value,
                      label: obj?.label
                    };
                  })}
                  value={UserInfoState?.role}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );
                    const selected = roleName?.find((obj) => {
                      if (parseInt(event.target.value) === obj.value)
                        return {
                          value: obj?.value,
                          label: obj?.label
                        };
                    });
                    updateUserInfoStateHandler('role', event.target.value);
                    updateUserInfoStateHandler('role', selected?.label);
                  }}
                />
                <MyInputBox
                  id="name"
                  label="Name"
                  name="name"
                  inputType="text"
                  value={UserInfoState?.name}
                  disabled={false}
                  error={UserInfoState?.errors?.name}
                  onChangeHandler={(event) => {
                    updateUserInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="email"
                  label="Email"
                  name="email"
                  inputType="email"
                  value={UserInfoState?.email}
                  disabled={false}
                  error={UserInfoState?.errors?.email}
                  onChangeHandler={(event) => {
                    updateUserInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="phone"
                  label="Mobile No"
                  name="phone"
                  inputType="text"
                  value={UserInfoState?.phone}
                  disabled={false}
                  error={UserInfoState?.errors?.phone}
                  onChangeHandler={(event) => {
                    updateUserInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyPasswordInput
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  value={UserInfoState?.newPassword}
                  error={UserInfoState?.errors?.newPassword}
                  onChangeHandler={(event) => {
                    updateUserInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyPasswordInput
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={UserInfoState?.confirmPassword}
                  error={UserInfoState?.errors?.confirmPassword}
                  onChangeHandler={(event) => {
                    updateUserInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
    </div>
  );
}

export default UserDialog;
