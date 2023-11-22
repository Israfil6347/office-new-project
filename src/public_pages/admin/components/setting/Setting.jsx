import React, { useState } from 'react';

import MyButton from '../../../../globalComponents/components/MyButton';
import aboutImage1 from '../../../../assets/images/users/user.jpg';
import MyDropdown from '../../../../globalComponents/components/MyDropdown';
import MyInputBox from '../../../../globalComponents/components/MyInputBox';
import MyImageInput from '../../../../globalComponents/components/MyImageInput';
import useSettingHook from './hook/useSettingHook';

function Setting() {
  const { setSettingAdd, settingAdd, updateSettingStateHandler } =
    useSettingHook();
  console.log(settingAdd);
  return (
    <div className="grid grid-cols-1 gap-4 p-4 ">
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold">General Settings</h2>
            <p className="text-sm">
              Update your basic setting information such as Email Address,
              Company Name, and Logo.
            </p>
          </div>
        </div>
        <div className="py-4">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <MyInputBox
                  id="OrganizationName"
                  label="Organization Name"
                  name="OrganizationName"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.OrganizationName}
                  error={settingAdd?.error?.OrganizationName}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div>
                <MyInputBox
                  id="OrganizationShortName"
                  label="Organization Short Name"
                  name="OrganizationShortName"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.OrganizationShortName}
                  error={settingAdd?.error?.OrganizationShortName}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div>
                <MyInputBox
                  id="Slogan"
                  label="Slogan"
                  name="Slogan"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.Slogan}
                  error={settingAdd?.error?.Slogan}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="address"
                  label="Address"
                  name="address"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.address}
                  error={settingAdd?.error?.address}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="hrEmail"
                  label="HR Email"
                  name="hrEmail"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.hrEmail}
                  error={settingAdd?.error?.hrEmail}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="hrSupportEmail"
                  label="HR Customer Support Email"
                  name="hrSupportEmail"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.hrSupportEmail}
                  error={settingAdd?.error?.hrSupportEmail}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="technicalSupportEmail"
                  label="Technical Support Email"
                  name="technicalSupportEmail"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.technicalSupportEmail}
                  error={settingAdd?.error?.technicalSupportEmail}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="fax"
                  label="Fax"
                  name="fax"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.fax}
                  error={settingAdd?.error?.fax}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="hRContactNo"
                  label="HR Contact No"
                  name="hRContactNo"
                  inputType="number"
                  disabled={false}
                  value={settingAdd?.hRContactNo}
                  error={settingAdd?.error?.hRContactNo}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="customerSupportContactNo"
                  label="Customer Support Contact No"
                  name="customerSupportContactNo"
                  inputType="number"
                  disabled={false}
                  value={settingAdd?.customerSupportContactNo}
                  error={settingAdd?.error?.customerSupportContactNo}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="technicalSupportContactNo"
                  label="Technical Support Contact No"
                  name="technicalSupportContactNo"
                  inputType="number"
                  disabled={false}
                  value={settingAdd?.technicalSupportContactNo}
                  error={settingAdd?.error?.technicalSupportContactNo}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="officeHour"
                  label="Office Hour"
                  name="officeHour"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.officeHour}
                  error={settingAdd?.error?.officeHour}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="facebookPage"
                  label="Facebook Page"
                  name="facebookPage"
                  inputType="text"
                  disabled={false}
                  value={settingAdd?.facebookPage}
                  error={settingAdd?.error?.facebookPage}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="messengerLink"
                  label="Messenger Link"
                  name="messengerLink"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.messengerLink}
                  error={settingAdd?.error?.messengerLink}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="youtubeChanel"
                  label="Youtube Chanel"
                  name="youtubeChanel"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.youtubeChanel}
                  error={settingAdd?.error?.youtubeChanel}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div>
                <MyInputBox
                  id="featuredVideoEmbeddedLink"
                  label="Featured Video Embedded Link"
                  name="featuredVideoEmbeddedLink"
                  inputType="email"
                  disabled={false}
                  value={settingAdd?.featuredVideoEmbeddedLink}
                  error={settingAdd?.error?.featuredVideoEmbeddedLink}
                  onChangeHandler={(event) => {
                    updateSettingStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="grid grid-cols-2">
                <div>
                  <MyImageInput
                    disabled={false}
                    label="New Original Logo"
                    name="NewOriginalLogo"
                    id="NewOriginalLogo"
                    value={settingAdd?.NewOriginalLogo}
                    required={true}
                    error={settingAdd?.error?.NewOriginalLogo}
                    heightClass="h-32"
                    onChangeHandler={(fieldName, fieldValue) => {
                      updateSettingStateHandler(fieldName, fieldValue);
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <MyImageInput
                    disabled={false}
                    label="Applicant Photo"
                    name="ApplicantPhoto"
                    value={settingAdd?.ApplicantPhoto}
                    required={true}
                    error={settingAdd?.error?.ApplicantPhoto}
                    heightClass="h-32"
                    onChangeHandler={(fieldName, fieldValue) => {
                      updateSettingStateHandler(fieldName, fieldValue);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <MyButton
                type="button"
                name="yes"
                label="Submit"
                styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/4"
              ></MyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Setting;
