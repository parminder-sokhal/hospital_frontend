// src/pages/links/AddLinksModal.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createLink } from "../../../redux/actions/linksAction";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";

const categoryOptions = [
  { value: "homestories", label: "Home Page Our Patient Stories link" },
  { value: "homeyoutube", label: "Home Page Trending YouTube Link" },
  { value: "homeinsta", label: "Home Page Instagram  Highlights link" },
  { value: "mediayoutube", label: "Media Page YouTube Links" },
  { value: "mediayoutubelatest", label: "Media Page YouTube Latest Video Link" },
  { value: "mediainsta", label: "Media Page Instagram Links" },
];

function AddLinksModal({ open, onClose }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    category: "",
    url: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    url: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.category) {
      newErrors.category = "Category is required.";
    }

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(formData.url)) {
      newErrors.url = "Enter a valid URL (must start with http or https).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(createLink(formData)).then(() => {
      onClose();
      setFormData({ category: "", url: "" });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, category: selectedOption.value }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-30 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Add New Link</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600"
            title="Close"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <Select
              options={categoryOptions}
              onChange={handleCategoryChange}
              placeholder="Select category"
              value={categoryOptions.find(
                (opt) => opt.value === formData.category
              )}
              className={errors.category ? "border-red-500 rounded" : ""}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">URL</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://example.com/profile"
              className={`w-full border p-2 rounded ${
                errors.url ? "border-red-500" : ""
              }`}
              required
            />
            {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Create Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLinksModal;
