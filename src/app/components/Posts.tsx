"use client";
import React, { useState } from "react";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../../../redux/services/Api";
import DashboardTableWrapper from "./DashboardTableWrapper";
import DashboradTable from "./DashboradTable";
import { IoAdd } from "react-icons/io5";
import ModalButton from "./ModalButton";
import PostForm from "./PostForm";
import Pagination from "./Pagination";
import Loader from "./Loader";
import "./styles/Posts.css";

const Posts = () => {
  const { data, isLoading } = useGetPostsQuery("");
  const [currentPage, setCurrentPage] = useState(0);
  const headers = ["userId", "title", "body"];
  const [deletePost] = useDeletePostMutation();

  const filteredData = data?.filter(
    (_: never, index: number) =>
      index >= currentPage * 10 && index < (currentPage + 1) * 10
  );

  return (
    <DashboardTableWrapper>
      <div className="posts-header">
        <h1 className="posts-title">Posts</h1>
        <ModalButton
          modalContent={<PostForm />}
          icon={<IoAdd />}
          ModalTitle={"Add Post"}
        />
      </div>

      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <DashboradTable
            headers={headers}
            data={filteredData}
            EditForm={PostForm}
            deleteMethod={deletePost}
          />
          <Pagination
            pageCount={data?.length / 10}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </DashboardTableWrapper>
  );
};

export default Posts;
