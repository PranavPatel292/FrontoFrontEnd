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
          <tbody className="space-y-10">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-60 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-60 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-60 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-60 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>

            <tr>
              <td />
              <td />
              <td />
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
