"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "./Input";
import "./styles/PostForm.css";

import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../../../redux/services/Api";
import { toast } from "react-toastify";

type FormInput = {
  userId: string;
  title: string;
  body: string;
};

type PropsType = {
  data?: { id: string; userId: string; title: string; body: string };
};

const PostForm = ({ data }: PropsType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: data
      ? { title: data.title, userId: data.userId, body: data.body }
      : undefined,
  });

  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const onSubmit = async (formData: FormInput) => {
    console.log(formData);
    if (data) {
      const updatedData = { ...formData, id: data.id };
      await toast.promise(updatePost(updatedData).unwrap(), {
        pending: "pending",
        success: "success",
        error: "failed",
      });
    } else {
      await toast.promise(createPost(formData).unwrap(), {
        pending: "pending",
        success: "success",
        error: "failed",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="inputs-2col">
        <div className="input-container">
          <Controller
            name="userId"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "userId",
                  type: "number",
                  placeholder: "userId",
                }}
                label={"userId"}
              />
            )}
          />
          {errors.userId && errors.userId.type === "required" && (
            <p className="error">{"This field is required"}</p>
          )}
        </div>
        <div className="input-container">
          <Controller
            name="title"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  name: "title",
                  type: "text",
                  placeholder: "title",
                }}
                label={"title"}
              />
            )}
          />
          {errors.title && errors.title.type === "required" && (
            <p className="error">{"This field is required"}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <Controller
          name="body"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Input
              inputProps={{
                ...field,
                name: "body",
                type: "text",
                placeholder: "body",
              }}
              label={"body"}
            />
          )}
        />
        {errors.body && errors.body.type === "required" && (
          <p className="error">{"This field is required"}</p>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button type="submit" className="form-button">
          {data ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
