import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import MyInputBox from '../../../../../globalComponents/components/MyInputBox';
import MyButton from '../../../../../globalComponents/components/MyButton';
import MyDialogueView from '../../../../../globalComponents/components/dialogues/MyDialogueView';
import MyModal from '../../../../../globalComponents/components/MyModal';
import MyDropdown from '../../../../../globalComponents/components/MyDropdown';
import useLeaders from '../hook/useLeaders';
import { Leader } from '../data/Leader';

const committeeName = [
  {
    value: '01',
    label: 'Office Bearers'
  },
  {
    value: '02',
    label: 'Board of Directors'
  },
  {
    value: '03',
    label: 'Credit Committee'
  },
  {
    value: '04',
    label: 'Supervisory Committee'
  }
];

function LeaderDialog({
  LeadersDialogOpen,
  setLeadersDialogOpen,
  setOnlyShowData,
  setEditPageData,
  onlyShowData,
  editPageData,
  leaderInfo
}) {
  const {
    LeadersInfoState,
    updateLeaderInfoStateHandler,
    setLeadersInfoState
  } = useLeaders();

  console.log(LeadersInfoState);

  useEffect(() => {
    if (onlyShowData) {
      setLeadersInfoState(leaderInfo);
    } else if (editPageData) {
      setLeadersInfoState(leaderInfo);
    } else {
      setLeadersInfoState(Leader);
    }
  }, [onlyShowData, editPageData, leaderInfo]);

  return (
    <div>
      <MyModal
        show={LeadersDialogOpen}
        size="M"
        onClose={() => {
          setLeadersDialogOpen(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setLeadersDialogOpen(false);
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <MyInputBox
                  id="name"
                  label="Name"
                  name="name"
                  inputType="text"
                  value={LeadersInfoState?.name}
                  disabled={false}
                  error={LeadersInfoState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />

                {/* <MyDropdown
                  id="committee"
                  label="Committee"
                  name="committee"
                  inputType="text"
                  required={false}
                  dropDownData={committeeName}
                  value={LeadersInfoState?.committee}
                  disabled={false}
                  error={LeadersInfoState?.errors?.committee}
                  onChange={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                /> */}
                <MyInputBox
                  id="position"
                  label="Position"
                  name="position"
                  inputType="text"
                  value={LeadersInfoState?.position}
                  disabled={false}
                  error={LeadersInfoState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="facebookProfile"
                  label="Facebook Profile"
                  name="facebookProfile"
                  inputType="text"
                  value={LeadersInfoState?.facebookProfile}
                  disabled={false}
                  error={LeadersInfoState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="linkedinProfile"
                  label="Linkedin Profile"
                  name="linkedinProfile"
                  inputType="text"
                  value={LeadersInfoState?.linkedinProfile}
                  disabled={false}
                  error={LeadersInfoState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="leaderOrder"
                  label="Leader Order"
                  name="leaderOrder"
                  inputType="text"
                  value={LeadersInfoState?.leaderOrder}
                  disabled={false}
                  error={LeadersInfoState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateLeaderInfoStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  name="sortDescription"
                  id="sortDescription"
                  value={LeadersInfoState?.sortDescription}
                  placeholder="Sort Description"
                  onChange={(value) => {
                    updateLeaderInfoStateHandler('sortDescription', value);
                  }}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  name="bio"
                  id="Bio"
                  value={LeadersInfoState?.bio}
                  placeholder="Bio"
                  onChange={(value) => {
                    updateLeaderInfoStateHandler('bio', value);
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

export default LeaderDialog;
