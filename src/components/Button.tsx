//TODO: add react query package and make a separate file for get and post

export interface ContactMeFormModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button = ({ setIsOpen }: ContactMeFormModalProps) => {
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex flex-row">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={openModal}
        >
          Add Properties
        </button>
      </div>
    </>
  );
};
