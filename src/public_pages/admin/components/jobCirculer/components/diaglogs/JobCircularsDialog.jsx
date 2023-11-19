import React, { useEffect } from 'react';
import MyModal from '../../../../../../globalComponents/components/MyModal';
import MyDialogueView from '../../../../../../globalComponents/components/dialogues/MyDialogueView';
import MyButton from '../../../../../../globalComponents/components/MyButton';
import MyImageInput from '../../../../../../globalComponents/components/MyImageInput';
import MyInputBox from '../../../../../../globalComponents/components/MyInputBox';
import ReactQuill from 'react-quill';
import useJobCircular from '../hook/useJobCircular';
import { jobCircularData } from '../data/jobCircularData';

function JobCircularsDialog({
  jobCircularsDialogOpen,
  setJobCircularsDialogOpen,
  editPageData,
  PageDataById,
  onlyShowData
}) {
  const {
    jobCircularDataState,
    updateJobCircularStateHandler,
    setJobCircularState
  } = useJobCircular();

  console.log(jobCircularDataState);

  useEffect(() => {
    if (onlyShowData) {
      setJobCircularState(PageDataById);
    } else if (editPageData) {
      setJobCircularState(PageDataById);
    } else {
      setJobCircularState(jobCircularData);
    }
  }, [onlyShowData, editPageData, PageDataById]);

  return (
    <div>
      <MyModal
        show={jobCircularsDialogOpen}
        size="M"
        onClose={() => {
          setJobCircularsDialogOpen(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setJobCircularsDialogOpen(false);
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
                  id="jobPosition"
                  label="Job Position"
                  name="jobPosition"
                  inputType="text"
                  value={jobCircularDataState?.jobPosition}
                  disabled={false}
                  // error={PageDataState?.errors?.title}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="slug"
                  label="Slug"
                  name="slug"
                  value={jobCircularDataState?.slug}
                  // error={PageDataState?.errors?.order}
                  inputType="text"
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />

                <MyInputBox
                  id="numberOfVacancy"
                  label="Total Number Of vacancy"
                  name="numberOfVacancy"
                  inputType="number"
                  value={jobCircularDataState?.numberOfVacancy}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="employStatus"
                  label="Employee Status"
                  name="employStatus"
                  inputType="text"
                  value={jobCircularDataState?.employStatus}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="religion"
                  label="Religion"
                  name="religion"
                  inputType="text"
                  value={jobCircularDataState?.religion}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="ageRange"
                  label="Age Range"
                  name="ageRange"
                  inputType="text"
                  value={jobCircularDataState?.ageRange}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="eduction"
                  label="Eduction"
                  name="eduction"
                  inputType="text"
                  value={jobCircularDataState?.eduction}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="gender"
                  label="Gender"
                  name="gender"
                  inputType="text"
                  value={jobCircularDataState?.gender}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="jobLocation"
                  label="Job Location"
                  name="jobLocation"
                  inputType="text"
                  value={jobCircularDataState?.jobLocation}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="salary"
                  label="Salary"
                  name="salary"
                  inputType="text"
                  value={jobCircularDataState?.salary}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="applicationDeadline"
                  label="Application Deadline"
                  name="applicationDeadline"
                  inputType="date"
                  value={jobCircularDataState?.applicationDeadline}
                  // error={PageDataState?.errors?.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updateJobCircularStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  name="jobContext"
                  id="jobContext"
                  value={jobCircularDataState?.jobContext}
                  placeholder="Job Context"
                  onChange={(value) => {
                    updateJobCircularStateHandler('jobContext', value);
                  }}
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  name="jobResponsibility"
                  id="jobResponsibility"
                  placeholder="Job Responsibility"
                  value={jobCircularDataState?.jobResponsibility}
                  onChange={(value) => {
                    updateJobCircularStateHandler('jobResponsibility', value);
                  }}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  name="experienceRequirements"
                  id="experienceRequirements"
                  placeholder="Experience Requirements"
                  value={jobCircularDataState?.experienceRequirements}
                  onChange={(value) => {
                    updateJobCircularStateHandler(
                      'experienceRequirements',
                      value
                    );
                  }}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  name="additionalRequirement"
                  id="additionalRequirement"
                  placeholder="Additional Requirement"
                  value={jobCircularDataState?.additionalRequirement}
                  onChange={(value) => {
                    updateJobCircularStateHandler(
                      'additionalRequirement',
                      value
                    );
                  }}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  name="compensationAndOtherBenefits "
                  id="compensationAndOtherBenefits"
                  placeholder="Compensation And Other Benefits"
                  value={jobCircularDataState?.compensationAndOtherBenefits}
                  onChange={(value) => {
                    updateJobCircularStateHandler(
                      'compensationAndOtherBenefits',
                      value
                    );
                  }}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  name="applicationInstruction"
                  id="applicationInstruction"
                  placeholder="Application Instruction"
                  value={jobCircularDataState?.applicationInstruction}
                  onChange={(value) => {
                    updateJobCircularStateHandler(
                      'applicationInstruction',
                      value
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

export default JobCircularsDialog;
