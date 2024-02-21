import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import TableSkeleton from "../../../components/Skeletons/TableSkeleton";
import toast from "react-hot-toast";
import ModernTable from "../../../components/Table/ModernTable";
import Ratings from "../../../utiles/Ratings";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../feature/products/productsApiSlice";
import DeleteModal from "../../../ui/Modals/DeleteModal";
import { useAddToSpecialOfferMutation } from "../../../feature/dashboard/dashboardApiSlice";
import { useGetMyProjectsQuery } from "../../../feature/projects/projectApiSlice";

const ProjectListTable = () => {
  const { token } = useSelector((state) => state?.auth);
  const [page, setPage] = useState(1);
  const [isDeleteMopen, setIsDeleteMopen] = useState(null);
  const [action, setAction] = useState("");

  useEffect(() => {
    if (action.action === "Delete") {
      setIsDeleteMopen(action?.itemId);
    }
    if (action.action === "Special Offer") {
      handleAddToSpecialOffer(action?.itemId);
    }
  }, [action]);

  const { data, isLoading, isSuccess, isError } = useGetMyProjectsQuery(
    {},
    { refetchOnReconnect: true }
  );


  // const [deleteProduct, { isLoading: deleteLoading }] =
  //   useDeleteProductMutation() || {};

  // const handleDeleteProduct = async (id) => {
  //   const res = await deleteProduct({ token, id });
  //   if (res && res?.data?.success) {
  //     toast.success(res?.data?.message);
  //     setIsDeleteMopen(null);
  //   } else {
  //     toast.error(res?.error?.data?.message);
  //   }
  // };


  let content;
  if (isLoading && !isSuccess && !isError) {
    content = <TableSkeleton />;
  }

  if (!isLoading && isSuccess && !isError) {
    content = <ProjectListTable />;
  }

  return (
    <div className="mt-10">
      <div className="mb-4">
        <ProjectListTable/>
        {/* {isDeleteMopen && (
          <DeleteModal
            open={isDeleteMopen}
            setOpen={setIsDeleteMopen}
            target={"Product"}
            loading={deleteLoading}
            handleDelete={handleDeleteProduct}
          />
        )} */}
      </div>
    </div>
  );
};

export default ProjectListTable;
