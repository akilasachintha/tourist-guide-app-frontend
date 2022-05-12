import React from "react";

const AdminDashboardLocations = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto rounded bg-white shadow dark:bg-gray-800">
          <div className="flex w-full flex-col items-start justify-between p-4 lg:flex-row lg:items-stretch lg:p-8">
            <div className="flex w-full flex-col items-start lg:w-1/3 lg:flex-row lg:items-center">
              <div className="flex items-center"></div>
            </div>
            <div className="flex w-full flex-col items-start justify-end lg:w-2/3 lg:flex-row lg:items-center">
              <div className="flex items-center border-gray-300 py-3 dark:border-gray-200 lg:border-l lg:border-r lg:py-0 lg:px-6">
                <p
                  className="text-base text-gray-600 dark:text-gray-400"
                  id="page-view"
                >
                  Viewing 1 - 20 of 60
                </p>
                <div
                  className="ml-2 cursor-pointer rounded border border-transparent text-gray-600 dark:text-gray-400"
                  onClick="pageView(false)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </div>
                <div
                  className="cursor-pointer rounded border border-transparent text-gray-600 focus:outline-none dark:text-gray-400"
                  onClick="pageView(true)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center border-gray-300 pb-3 dark:border-gray-200 lg:border-r lg:px-6 lg:pb-0">
                <div className="relative z-10 w-32">
                  <div className="pointer-events-none absolute inset-0 z-0 m-auto mr-2 h-5 w-5 text-gray-600 dark:text-gray-400 xl:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <select
                    aria-label="Selected tab"
                    className="focus:shadow-outline-gray form-select block w-full appearance-none rounded border border-transparent bg-transparent py-2 px-2 text-base text-gray-600 focus:border-gray-800 focus:outline-none dark:text-gray-400 xl:px-3"
                  >
                    <option>List View</option>
                    <option>Grid View</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center lg:ml-6">
                <button className="focus:shadow-outline-gray flex h-8 items-center rounded border border-transparent bg-gray-200 px-5 text-sm text-indigo-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:border-gray-800 focus:outline-none">
                  Download All
                </button>
                <div className="focus:shadow-outline-gray ml-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-transparent bg-indigo-700 text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:border-gray-800 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr className="h-16 w-full border-b border-gray-300 py-8 dark:border-gray-200">
                  <th className="pl-8 pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    <input
                      type="checkbox"
                      className="relative h-5 w-5 cursor-pointer rounded border border-gray-400 bg-white outline-none dark:border-gray-200 dark:bg-gray-800"
                      onClick="checkAll(this)"
                    />
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    <div className="relative w-10 cursor-default text-gray-600 opacity-0 dark:text-gray-400">
                      <div className="absolute top-0 right-0 mr-2 -mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-700 text-xs text-white">
                        3
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-file"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      </svg>
                    </div>
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    Invoice Number
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    Client
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    Company Contact
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    Amount
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    Date
                  </th>
                  <th className="pr-6 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-indigo-400 opacity-0" />
                  </th>
                  <td className="pr-8 text-left text-sm font-normal leading-4 tracking-normal text-gray-600 dark:text-gray-400">
                    More
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-24 border-b border-gray-300 dark:border-gray-200">
                  <td className="whitespace-no-wrap pl-8 pr-6 text-left text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <input
                      type="checkbox"
                      className="relative h-5 w-5 cursor-pointer rounded border border-gray-400 bg-white outline-none dark:border-gray-200 dark:bg-gray-800"
                      onClick="tableInteract(this)"
                    />
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <div className="relative w-10 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-file"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      </svg>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    #MC10023
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    Toyota Motors
                  </td>
                  <td className="whitespace-no-wrap pr-6">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png"
                          alt={"sdffsf"}
                          className="h-full w-full overflow-hidden rounded-full shadow"
                        />
                      </div>
                      <p className="ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    $2,500
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    02.03.20
                  </td>
                  <td className="pr-6">
                    <div className="h-2 w-2 rounded-full bg-indigo-400" />
                  </td>
                  <td className="relative pr-8">
                    <button className="cursor-pointer rounded border border-transparent text-gray-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick="dropdownFunction(this)"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className="dropdown-content absolute left-0 z-10 mt-1 -ml-12 hidden w-32 shadow-md">
                      <ul className="rounded bg-white py-1 shadow dark:bg-gray-800">
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Edit
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Delete
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="h-24 border-b border-gray-300 dark:border-gray-200">
                  <td className="whitespace-no-wrap pl-8 pr-6 text-left text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <input
                      type="checkbox"
                      className="relative h-5 w-5 cursor-pointer rounded border border-gray-400 bg-white outline-none dark:border-gray-200 dark:bg-gray-800"
                      onClick="tableInteract(this)"
                    />
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <div className="relative w-10 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-file"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      </svg>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    #MC10023
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    Toyota Motors
                  </td>
                  <td className="whitespace-no-wrap pr-6">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
                          alt={"fsdfsf"}
                          className="h-full w-full overflow-hidden rounded-full shadow"
                        />
                      </div>
                      <p className="ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    $2,500
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    02.03.20
                  </td>
                  <td className="pr-6">
                    <div className="h-2 w-2 rounded-full bg-indigo-400" />
                  </td>
                  <td className="relative pr-8">
                    <button className="cursor-pointer rounded border border-transparent text-gray-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick="dropdownFunction(this)"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className="dropdown-content absolute left-0 z-10 mt-1 -ml-12 hidden w-32 shadow-md">
                      <ul className="rounded bg-white py-1 shadow dark:bg-gray-800">
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Edit
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Delete
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="h-24 border-b border-gray-300 dark:border-gray-200">
                  <td className="whitespace-no-wrap pl-8 pr-6 text-left text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <input
                      type="checkbox"
                      className="relative h-5 w-5 cursor-pointer rounded border border-gray-400 bg-white outline-none dark:border-gray-200 dark:bg-gray-800"
                      onClick="tableInteract(this)"
                    />
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <div className="relative w-10">
                      <div className="absolute top-0 right-0 mr-2 -mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-700 text-xs text-white">
                        1
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    #MC10023
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    Toyota Motors
                  </td>
                  <td className="whitespace-no-wrap pr-6">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png"
                          alt={"fsfsfsf"}
                          className="h-full w-full overflow-hidden rounded-full shadow"
                        />
                      </div>
                      <p className="ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    $2,500
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    02.03.20
                  </td>
                  <td className="pr-6">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                  </td>
                  <td className="relative pr-8">
                    <button className="cursor-pointer rounded border border-transparent text-gray-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick="dropdownFunction(this)"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className="dropdown-content absolute left-0 z-10 mt-1 -ml-12 hidden w-32 shadow-md">
                      <ul className="rounded bg-white py-1 shadow dark:bg-gray-800">
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Edit
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Delete
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="h-24 border-b border-gray-300 dark:border-gray-200">
                  <td className="whitespace-no-wrap pl-8 pr-6 text-left text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <input
                      type="checkbox"
                      className="relative h-5 w-5 cursor-pointer rounded border border-gray-400 bg-white outline-none dark:border-gray-200 dark:bg-gray-800"
                      onClick="tableInteract(this)"
                    />
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    <div className="relative w-10">
                      <div className="absolute top-0 right-0 mr-2 -mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-700 text-xs text-white">
                        5
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    #MC10023
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    Toyota Motors
                  </td>
                  <td className="whitespace-no-wrap pr-6">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png"
                          alt={"adasdad"}
                          className="h-full w-full overflow-hidden rounded-full shadow"
                        />
                      </div>
                      <p className="ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    $2,500
                  </td>
                  <td className="whitespace-no-wrap pr-6 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100">
                    02.03.20
                  </td>
                  <td className="pr-6">
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                  </td>
                  <td className="relative pr-8">
                    <button className="cursor-pointer rounded border border-transparent text-gray-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick="dropdownFunction(this)"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className="dropdown-content absolute left-0 z-10 mt-1 -ml-12 hidden w-32 shadow-md">
                      <ul className="rounded bg-white py-1 shadow dark:bg-gray-800">
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Edit
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Delete
                        </li>
                        <li className="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white dark:text-gray-400">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLocations;
