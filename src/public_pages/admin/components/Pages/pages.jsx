import aboutImage1 from '../../../../assets/images/users/user.jpg';
import MyButton from '../../../../globalComponents/components/MyButton';
import MyDropdown from '../../../../globalComponents/components/MyDropdown';
import { paginationData } from '../../../../globalComponents/data/paginationData';
import React, { useState } from 'react';
import MyModal from '../../../../globalComponents/components/MyModal';
import MyDialogueView from '../../../../globalComponents/components/dialogues/MyDialogueView';
import Logo from './../../../../assets/Logo/logo.png';
import MyInputBox from '../../../../globalComponents/components/MyInputBox';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MyTextInput from '../../../../globalComponents/components/MyTextInput';
import MyImageInput from '../../../../globalComponents/components/MyImageInput';

function Pages() {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [OpenViewDialog, setOpenViewDialog] = useState(false);
  const [paginationRequestObj, setPaginationRequestObj] = useState({
    ActiveStatus: -1,
    startRec: 0,
    pageSize: 10,
    searchText: null
  });

  const paginationHandler = (fieldName, fieldValue) => {
    if (fieldName === 'pageSize') {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          startRec: 0,
          [fieldName]: fieldValue
        };
      });
    } else {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          [fieldName]: fieldValue
        };
      });
    }
  };

  const index = () => {
    return paginationRequestObj.pageSize * paginationRequestObj.startRec;
  };

  // const endIndex = () => {
  //   if (paginationRequestObj.startRec === data?.Paging?.LastPage - 1) {
  //     var temp = data?.Paging?.totalRecords - index();
  //     return index() + temp;
  //   } else {
  //     return index() + 10;
  //   }
  // };
  return (
    <div>
      {/* Edit dialogs Open start */}
      <MyModal
        show={openEditDialog}
        size="M"
        onClose={() => {
          setOpenEditDialog(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setOpenEditDialog(false);
          }}
          dialogueHeader={
            <div className="header flex   bg-background p-6 text-2xl font-bold text-onSurface">
              <img src={Logo} alt="" width="40" height="40" />
              <p className="ml-2 antialiased">Page</p>
            </div>
          }
          dialogueFooter={
            <div className="flex  justify-end gap-4 bg-background p-4 ">
              <MyButton
                type="button"
                name="yes"
                label="Submit"
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
                    label="Applicant Photo"
                    name="ApplicantPhoto"
                    // value={personSectionState.ApplicantPhoto}
                    required={true}
                    // error={personSectionState.Errors.ApplicantPhoto}
                    heightClass="h-32"
                    onChangeHandler={(fieldName, fieldValue) => {
                      // updatePersonSectionState(fieldName, fieldValue);
                    }}
                  />
                </div>
                <div className="flex items-center  ">
                  <img src={Logo} className="h-35 w-35 " alt="img not found" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <MyInputBox
                  id="title"
                  label="Title"
                  name="Title"
                  inputType="text"
                  disabled={false}
                />
                <MyInputBox
                  id="Order"
                  label="Order"
                  name="Order"
                  inputType="number"
                  disabled={false}
                />

                <MyInputBox
                  id="slug"
                  label="Slug"
                  name="slug"
                  inputType="text"
                  disabled={false}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  id="Sort Description"
                  placeholder="Sort Description"
                  name=""
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  id="Description"
                  placeholder="Description"
                  name=""
                />
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* Edit dialogs open close  */}
      {/* View dialogs Open start */}
      <MyModal
        show={OpenViewDialog}
        size="M"
        onClose={() => {
          setOpenViewDialog(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setOpenViewDialog(false);
          }}
          dialogueHeader={
            <div className="header flex   bg-background p-6 text-2xl font-bold text-onSurface">
              <img src={Logo} alt="" width="40" height="40" />
              <p className="ml-2 antialiased">Page</p>
            </div>
          }
          dialogueFooter={
            <div className="flex  justify-end gap-4 bg-background p-4 ">
              <MyButton
                type="button"
                name="Ok"
                label="Ok"
                styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/4"
                onClick={() => {
                  setOpenViewDialog(false);
                }}
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
                    label="Applicant Photo"
                    name="ApplicantPhoto"
                    // value={personSectionState.ApplicantPhoto}
                    required={true}
                    // error={personSectionState.Errors.ApplicantPhoto}
                    heightClass="h-32"
                    onChangeHandler={(fieldName, fieldValue) => {
                      // updatePersonSectionState(fieldName, fieldValue);
                    }}
                  />
                </div>
                <div className="flex items-center  ">
                  <img src={Logo} className="h-35 w-35 " alt="img not found" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <MyInputBox
                  id="title"
                  label="Title"
                  name="Title"
                  inputType="text"
                  disabled={false}
                />
                <MyInputBox
                  id="Order"
                  label="Order"
                  name="Order"
                  inputType="number"
                  disabled={false}
                />

                <MyInputBox
                  id="slug"
                  label="Slug"
                  name="slug"
                  inputType="text"
                  disabled={false}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  id="Sort Description"
                  placeholder="Sort Description"
                  name=""
                />
              </div>

              <div>
                <ReactQuill
                  theme="snow"
                  id="Description"
                  placeholder="Description"
                  name=""
                />
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* View dialogs open close  */}
      <div className="grid grid-cols-1 gap-4 p-4 ">
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex flex-col ">
              <h2 className="text-2xl font-semibold">Our Pages</h2>
              <p className="text-sm">See information about all Loans Product</p>
            </div>
            <div className="m-2 ">
              <div className="flex justify-end mb-4">
                <MyButton type="button" styleClass="p-2">
                  <i class="fa-solid fa-plus">
                    <span>Add </span>
                  </i>
                </MyButton>
              </div>
              <div className="">
                <from>
                  <label
                    htmlFor=""
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div className="">
                    <input
                      type="search"
                      className="block w-full p-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                      placeholder="search"
                    />
                  </div>
                </from>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden overflow-y-scroll  overflow-x-scroll"
            style={
              ({ maxWidth: window.innerWidth - 0 },
              { height: window.innerHeight - 383 })
            }
          >
            <table className="w-full table">
              <thead className="">
                <tr className="sticky top-0 hidden h-16 w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0"> Title</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Slug</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Order</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Image</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Status</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Action</p>
                  </th>
                </tr>
              </thead>

              <tbody className="flex-1  bg-backgroundVariant sm:flex-none ">
                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700  md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      The pioneer of the Credit Union
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      The pioneer of the Credit Union
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton
                        type="button"
                        styleClass="p-2"
                        onClick={() => {
                          setOpenViewDialog(true);
                        }}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton
                        type="button"
                        styleClass="p-2"
                        onClick={() => {
                          setOpenEditDialog(true);
                        }}
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-trash-can"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>
                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700 my-3 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      President Message
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      President Message
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>
                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700 my-3 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Our Story
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Our Story
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>
                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700 my-3 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Mission & Vision
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Mission & Vision
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>
                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700 my-3 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Core Values
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Core Values
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>

                <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700  md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      About Us
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      About Us
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Order
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">0</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Image
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          src={aboutImage1}
                          className="rounded-full"
                          alt="img not found"
                        />
                      </div>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Status
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      <MyButton
                        type="button"
                        label="published"
                        styleClass="p-2"
                      ></MyButton>
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Action
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal flex justify-start">
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-solid fa-eye"></i>
                      </MyButton>
                      <MyButton type="button" styleClass="p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </MyButton>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="sticky bottom-0 flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
            id="table-footer"
          >
            <div className="flex items-center gap-2">
              <label>Show</label>

              <MyDropdown
                name="pageSize"
                value={paginationRequestObj?.pageSize}
                required={false}
                dropDownData={paginationData}
                onChange={(event) => {
                  paginationHandler(event.target.name, event.target.value);
                }}
                label={''}
                leftIcon={<i className="fa-solid fa-list-ol"></i>}
              />

              <label>entries</label>
            </div>
            {/* <div>{`Showing ${index()} to ${endIndex()} of ${
            JobCircularsData?.Paging?.totalRecords
          } entries`}</div> */}
            <div>{`Showing 0 to 10 of 17 entries`}</div>
            <div className="whitespace-nowrap text-right">
              {/* <Pagination
                count={20}
                variant="outlined"
                shape="rounded"
                defaultPage={1}
                siblingCount={0}
                onChange={(e, value) => {
                  paginationHandler('startRec', value - 1);
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
