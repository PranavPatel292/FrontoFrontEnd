import React from "react";

export const SkeletonTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white h-5 border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
              <td
                scope="row"
                className=" bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
              />

              <td className=" bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />

              <td className=" bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />

              <td className=" bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
