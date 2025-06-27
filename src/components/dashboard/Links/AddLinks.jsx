import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks, deleteLink } from "../../../redux/actions/linksAction";
import { FaSearch, FaLink, FaTrash } from "react-icons/fa";
import AddLinksModal from "./AddLinksModal.jsx";

const categoryOptions = {
  homestories: "Home Page Our Patient Stories links",
  homeyoutube: "Home Page Trending YouTube Links",
  homeinsta: "Home Page Instagram  Highlights links",
  mediayoutube: "Media Page YouTube Links",
  mediayoutubelatest: "Media Page YouTube latest video Link",
  mediainsta: "Media Page Instagram Links",
};

function AddLinks() {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  // Group links by category
  const groupedLinks = {};
  links?.forEach((link) => {
    if (!groupedLinks[link.category]) groupedLinks[link.category] = [];
    groupedLinks[link.category].push(link);
  });

  // Filter categories and links based on search
  const filteredCategoryKeys = Object.keys(groupedLinks).filter((cat) =>
    categoryOptions[cat]?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteLink(id)).then(() => {
      dispatch(getLinks());
      setConfirmDeleteId(null);
    });
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Social Links</h1>
          <p className="text-gray-500 text-sm">Manage social media links</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaLink /> Add Link
        </button>
      </div>

      <div className="mb-6 w-full md:w-1/3 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by category"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredCategoryKeys.length === 0 && (
        <p className="text-center text-gray-500">No links found</p>
      )}

      {filteredCategoryKeys.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{categoryOptions[category]}</h2>
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 w-1/6">#</th>
                <th className="p-2 w-4/6">URL</th>
                <th className="p-2 w-1/6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groupedLinks[category].map((link, idx) => (
                <tr key={link._id} className="border-t border-gray-300">
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2 break-all text-blue-600 underline">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                     {link.url}
                    </a>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => setConfirmDeleteId(link._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <AddLinksModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          dispatch(getLinks());
        }}
      />

      {confirmDeleteId && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-xs">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this link?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddLinks;
