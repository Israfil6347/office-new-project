import React, { useState } from 'react';
import MyButton from '../../../../globalComponents/components/MyButton';
import aboutImage1 from '../../../../assets/images/users/user.jpg';
import MyDropdown from '../../../../globalComponents/components/MyDropdown';
import PostAddPage from '../../share/diaglog/PostAddPage';
const pageData = [
  {
    id: '01',
    title: 'The pioneer of the Credit Union',
    slug: 'The pioneer of the Credit Union',
    order: '0',
    status: 'Publish',
    image: { aboutImage1 }
  },
  {
    id: '02',
    title: 'The pioneer of the Credit Union',
    slug: 'The pioneer of the Credit Union',
    order: '0',
    status: 'Draft',
    image: { aboutImage1 }
  }
];
function GalleryImage() {
  const [openPageViewDialog, setOpenPageViewDialog] = useState(false);
  const [onlyShowData, setOnlyShowData] = useState(false);
  const [editPageData, setEditPageData] = useState(false);
  const [PageDataById, setPageDataById] = useState({});

  return (
    <>
      <PostAddPage
        openPageViewDialog={openPageViewDialog}
        setOpenPageViewDialog={setOpenPageViewDialog}
        editPageDatadiaglog={editPageData}
        PageDataById={PageDataById}
        setEditPageDatadiaglog={setEditPageData}
        onlyShowData={onlyShowData}
        setOnlyShowData={setOnlyShowData}
        setEditPageData={setEditPageData}
      />
      <div className="grid grid-cols-1 gap-4 p-4 ">
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col ">
              <h2 className="text-2xl font-semibold">Download</h2>
              <p className="text-sm">See information about all Download</p>
            </div>
            <div className="m-2 ">
              <div className="flex justify-end mb-4">
                <MyButton
                  type="button"
                  styleClass="p-2"
                  onClick={() => {
                    setOpenPageViewDialog(true);
                  }}
                >
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
              { height: window.innerHeight - 390 })
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
                {pageData.map((item, index) => (
                  <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700  md:my-0 md:table-row">
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" for="">
                        Title
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {item.title}
                      </p>
                    </td>
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" for="">
                        Slug
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {item.slug}
                      </p>
                    </td>
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" for="">
                        Order
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {item.order}
                      </p>
                    </td>
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" for="">
                        Image
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        <div className="w-14 h-14 rounded-full">
                          <img
                            src={item.image}
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
                      <p
                        className={`p-2 text-surface  flex justify-center  font-semibold md:p-0 md:font-normal rounded ${
                          item.status === 'Publish'
                            ? 'w-16 bg-success'
                            : 'w-12 bg-error'
                        }`}
                      >
                        {item.status}
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
                            setOpenPageViewDialog(true);
                            setPageDataById(item);
                            setOnlyShowData(true);
                          }}
                        >
                          <i class="fa-solid fa-eye"></i>
                        </MyButton>
                        <MyButton
                          type="button"
                          styleClass="p-2"
                          onClick={() => {
                            setOpenPageViewDialog(true);
                            setPageDataById(item);
                            setEditPageData(true);
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
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="sticky bottom-0 flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
            id="table-footer"
          >
            <div className="flex items-center gap-2">
              <label>Show</label>

              {/* <MyDropdown
              name="pageSize"
              value={paginationRequestObj?.pageSize}
              required={false}
              dropDownData={paginationData}
              onChange={(event) => {
                paginationHandler(event.target.name, event.target.value);
              }}
              label={''}
              leftIcon={<i className="fa-solid fa-list-ol"></i>}
            /> */}

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
    </>
  );
}

export default GalleryImage;
