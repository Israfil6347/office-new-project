import aboutImage1 from '../../../../assets/images/users/user.jpg';
import MyButton from '../../../../globalComponents/components/MyButton';

function pages() {
  return (
    <div>
      <div className="p-6 grid grid-cols-1 gap-4 ">
        <div className="bg-white p-6">
          <div className="flex justify-between">
            <div className="w-1/4 py-3">
              <h2 className="text-2xl font-semibold">Pages</h2>
              <p className="text-sm">See information about all pages</p>
            </div>
            <div className="w-1/4">
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
              { height: window.innerHeight - 325 })
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
                <tr className="flex h-16 w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700  md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      About
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      about
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
                <tr className="flex h-16 w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 border border-gray-700  md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Title
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      About
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0" for="">
                      Slug
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      about
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
                        <img src={aboutImage1} alt="img not found" />
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
                        <img src={aboutImage1} alt="img not found" />
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
        </div>
      </div>
    </div>
  );
}

export default pages;
