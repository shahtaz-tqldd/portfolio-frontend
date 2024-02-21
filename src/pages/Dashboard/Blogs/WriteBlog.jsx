import React, { useState } from "react";
import Greetings from "../../../utiles/Greetings";
import { TextField } from "@mui/material";
import ReactQuill from "react-quill";
import { quillModules } from "../../../utiles/constants/quill-modules";
import SubmitButton from "../../../ui/Buttons/SubmitButton";
import { useCreateProductMutation } from "../../../feature/products/productsApiSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../../ui/Images/LogoImage";

const WriteBlog = () => {
  const { token } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  // tags add
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleTagChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() !== "") {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleTagUpdate = (index, updatedTag) => {
    const updatedTags = [...tags];
    updatedTags[index] = updatedTag;
    setTags(updatedTags);
  };

  // Add product through rtk api
  const [createProduct, { isLoading }] = useCreateProductMutation() || {};
  const handleBlogSubmit = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", selectedFile);

    const nonEmptyTags = tags.filter((tag) => tag.trim() !== "");

    if (nonEmptyTags.length > 0) {
      nonEmptyTags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    }

    const res = await createProduct({ bodyData: formData, token });

    if (res?.data?.success) {
      toast.success(res?.data?.message);
      navigate("/dashboard/blogs");
    } else {
      toast.error(res?.error?.data?.message);
    }
  };

  return (
    <div>
      <Greetings
        page={"Write Blog"}
        text={"Blog promt to write and upload cover"}
      />
      <div className="max-w-[800px] mx-auto">
        <LogoImage
          setSelectedFile={setSelectedFile}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          id={"logo"}
          maxSize={1}
        />
        <form onSubmit={handleBlogSubmit} className="flex flex-col gap-5 mt-5">
          <input
            type="text"
            className="text-3xl font-bold bg-transparent outline-none border-b border-slate-400 py-2"
            onChange={(val) => setTitle(val)}
            placeholder="Blog Title"
          />

          <ReactQuill
            modules={quillModules}
            placeholder="Write Blogs"
            theme="snow"
            className="custom-quill-editor"
            value={body}
            onChange={(val) => setBody(val)}
          />

          {/* tags */}
          <div className="mt-10">
            <h2 className="font-bold text-slate-500 mb-2">Tags</h2>
            <div className="flex flex-wrap items-end gap-5">
              {tags.map((tag, i) => (
                <TextField
                  key={i}
                  label={`Tag ${i + 1}`}
                  type="text"
                  variant="standard"
                  className="w-[120px]"
                  defaultValue={tag}
                  onChange={(e) => handleTagUpdate(i, e.target.value)}
                />
              ))}
              <TextField
                label={`Tag ${tags.length > 0 ? tags?.length + 1 : ""}`}
                type="text"
                variant="standard"
                className="w-[120px]"
                value={currentTag}
                onChange={handleTagChange}
              />
              <button
                onClick={handleAddTag}
                className="bg-slate-700 hover:bg-slate-600 tr py-2 text-sm px-3 rounded"
              >
                + Add another
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <SubmitButton loading={isLoading} name={"Post Blog"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
