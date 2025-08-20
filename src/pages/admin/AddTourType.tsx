/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import AddTourTypeModal from "@/components/modules/admin/tourType/AddTourTypeModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteTourTypeMutation,
  useGetTourTypeQuery,
} from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);
  const [deleteTourType] = useDeleteTourTypeMutation();

  const handleDeleteTourType = async (id: string) => {
    try {
      const toastId = toast.loading("Deleting Tour Type...");
      const res = await deleteTourType({ id: id }).unwrap();
      if (res.success) {
        toast.success("Tour Type deleted successfully", { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete Tour Type");
    }
  };

  return (
    <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto border-muted rounded-md px-2 border">
      <div className="flex items-center justify-between pb-10 pt-4">
        <h1 className="text-xl font-semibold ">Tour Type</h1>
        <AddTourTypeModal />
      </div>
      <Table>
        <TableCaption>A list of your Tour Type.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: { _id: string; name: string }, idx: any) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{item?.name}</TableCell>
              <TableCell>
                <DeleteConfirmation
                  onConfirm={() => handleDeleteTourType(item._id)}
                >
                  <Button className="w-8 h-8">
                    <Trash2 />
                  </Button>
                </DeleteConfirmation>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddTourType;
