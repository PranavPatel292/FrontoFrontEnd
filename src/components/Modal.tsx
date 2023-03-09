import { Formik, Form, Field, useFormik } from "formik";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { usePostCustomer } from "../requests/customer";

export interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ValidationSchema = Yup.object().shape({
  address: Yup.string().required("Please enter your address 🏠"),
  valuation: Yup.number()
    .typeError("Please enter valid number")
    .required("Please enter any value"),
});

export const Modal = ({ setIsOpen }: ModalProps) => {
  const form = useRef<HTMLDivElement>(null);

  const { mutate } = usePostCustomer();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={form}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-white p-10  w-[50%] rounded flex flex-col space-y-12">
          <p className="text-xl md:text-2xl">Enter property details</p>
          <Formik
            initialValues={{
              address: "",
              valuation: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
              mutate(values, {
                onSuccess: () => {
                  toast.success("Data inserted successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                },
                onError: () => {
                  toast.error("Sorry something went wrong", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                },
              });
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full flex flex-col space-y-5">
                <div>
                  <Field
                    name="address"
                    placeholder="1- 7 Hawkesbury Road"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.address && touched.address ? (
                    <p className="text-center p-0 text-[#FC1111] font-poppins font-[500] text-sm   leading-[27px]">
                      {errors.address}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="valuation"
                    placeholder="10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.valuation && touched.valuation ? (
                    <p className="text-[#FC1111] text-center font-poppins font-[500] text-sm   leading-[27px]">
                      {errors.valuation}
                    </p>
                  ) : null}
                </div>

                <div className="flex fle-row justify-around">
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};
