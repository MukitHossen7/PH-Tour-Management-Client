import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);
  console.log("Tour Types:", data);
  return (
    <div>
      <h1>Add Tour Type Component</h1>
    </div>
  );
};

export default AddTourType;
