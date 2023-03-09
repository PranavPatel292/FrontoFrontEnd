import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Table } from "./Table";

export const Container = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-full h-full max-w-[1280px] mx-auto">
        <div className="mt-64">
          <div className="w-full  flex flex-row justify-end">
            <Button setIsOpen={setIsOpen} />
          </div>
          <Table />
        </div>
        {modalIsOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};
