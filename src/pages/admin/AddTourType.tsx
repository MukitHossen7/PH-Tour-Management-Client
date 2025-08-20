/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);

  return (
    <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto border-muted rounded-md px-2 border">
      <div className="flex items-center justify-between pb-10 pt-4">
        <h1 className="text-xl font-semibold ">Tour Type</h1>
        <Button>Add Tour Type</Button>
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
          {data?.data?.map((item: { name: string }, idx: any) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{item?.name}</TableCell>
              <TableCell>
                <Button className="w-8 h-8">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddTourType;
