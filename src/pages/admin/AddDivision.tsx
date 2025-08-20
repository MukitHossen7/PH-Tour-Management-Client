import AddDivisionModal from "@/components/modules/admin/division/AddDivisionModal";

const AddDivision = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto border-muted rounded-md px-2 border">
      <div className="flex items-center justify-between pb-10 pt-4">
        <h1 className="text-xl font-semibold ">Division Type</h1>
        <AddDivisionModal />
      </div>
    </div>
  );
};

export default AddDivision;
