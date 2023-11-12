import React, { useState } from 'react';
import MyModal from '../../../../globalComponents/components/MyModal';
import MyDialogueView from '../../../../globalComponents/components/dialogues/MyDialogueView';
import MyButton from '../../../../globalComponents/components/MyButton';
import MyImageInput from '../../../../globalComponents/components/MyImageInput';
import MyInputBox from '../../../../globalComponents/components/MyInputBox';
import ReactQuill from 'react-quill';
import usePageData from '../../hook/usePageData';
import { PageDataValidation } from '../../Validation/PageDataValidation';

function PostAddPage({
  openPageViewDialog,
  setOpenPageViewDialog,
  ViewPageDatadiaglog,
  editPageDatadiaglog,
  PageDataById,
  setViewPageDatadiaglog,
  setEditPageDatadiaglog
}) {
  const { PageDataState, updatePageDataStateHandler, setPageDataState } =
    usePageData();

  const onSubmitHandler = () => {
    console.log(PageDataState);
  };
  return (
    <div>
      <MyModal
        show={openPageViewDialog}
        size="M"
        onClose={() => {
          setOpenPageViewDialog(false);
          setViewPageDatadiaglog(false);
          setEditPageDatadiaglog(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setOpenPageViewDialog(false);
            setViewPageDatadiaglog(false);
            setEditPageDatadiaglog(false);
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
                label="Submit"
                onClick={() => {
                  var error = '';
                  for (var fieldName in PageDataState) {
                    updatePageDataStateHandler(
                      fieldName,
                      PageDataState[fieldName]
                    );
                    error = error + '';
                    PageDataValidation(fieldName, PageDataState[fieldName]);
                  }
                  if (error) {
                    window.scrollTo({
                      top: window.innerHeight / 2,
                      behavior: 'smooth'
                    });
                  }

                  if (error.length === 0) {
                    onSubmitHandler();
                  }
                }}
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
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <MyImageInput
                    disabled={false}
                    label="Page Image"
                    name="pageImage"
                    value={PageDataState.pageImage}
                    required={true}
                    error={PageDataState.errors.pageImage}
                    heightClass="h-32"
                    onChangeHandler={(fieldName, fieldValue) => {
                      updatePageDataStateHandler(fieldName, fieldValue);
                    }}
                  />
                </div>
                <div className="flex items-center  ">
                  <img src="#" className="h-35 w-35 " alt="img not found" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <MyInputBox
                  id="title"
                  label="Title"
                  name="title"
                  inputType="text"
                  value={PageDataState.title}
                  disabled={false}
                  error={PageDataState.errors.title}
                  onChangeHandler={(event) => {
                    updatePageDataStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
                <MyInputBox
                  id="Order"
                  label="Order"
                  name="order"
                  value={PageDataState.order}
                  error={PageDataState.errors.order}
                  inputType="number"
                  disabled={false}
                  onChangeHandler={(event) => {
                    updatePageDataStateHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />

                <MyInputBox
                  id="slug"
                  label="Slug"
                  name="slug"
                  inputType="text"
                  value={PageDataState.slug}
                  error={PageDataState.errors.slug}
                  disabled={false}
                  onChangeHandler={(event) => {
                    updatePageDataStateHandler(
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
                  id="Sort Description"
                  value={PageDataState.sortDescription}
                  placeholder="Sort Description"
                  onChange={(value) => {
                    updatePageDataStateHandler('sortDescription', value);
                  }}
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  name="description"
                  id="Description"
                  placeholder="Description"
                  value={PageDataState.description}
                  onChange={(value) => {
                    updatePageDataStateHandler('description', value);
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

export default PostAddPage;
