import React, { useState } from 'react';
import aboutImage1 from '../../../../assets/images/users/user.jpg';
import MyButton from '../../../../globalComponents/components/MyButton';
import { paginationData } from '../../../../globalComponents/data/paginationData';
import MyDropdown from '../../../../globalComponents/components/MyDropdown';

function AdminService() {
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
    <div className="grid grid-cols-1 gap-4 p-4 ">
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="">
            <h2 className="text-2xl font-semibold">Our Service</h2>
            <p className="text-sm">See information about all Loans Product</p>
          </div>
          <div className="  ">
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
                    <MyButton type="button" styleClass="p-2 ">
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
  );
}

export default AdminService;
