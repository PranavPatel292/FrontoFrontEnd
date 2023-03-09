import { Button } from "./Button";
import { Modal } from "./Modal";
import { Table } from "./Table";

export const Container = () => {
  return (
    <>
      <div className="w-full h-full max-w-[1280px] mx-auto">
        <div className="mt-64">
          <div className="w-full  flex flex-row justify-end">
            <Button />
          </div>
          <Table />
        </div>
        <Modal />
      </div>
    </>
  );
};
