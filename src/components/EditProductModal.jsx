import React, { useState, useEffect } from "react";

const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    instock: "",
    category: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>

        <form className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2"
          />

          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-2"
          />

          <input
            type="number"
            name="instock"
            value={formData.instock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full border p-2"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border p-2"
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              onClick={onSave(formData)}
              className="bg-blue-500 text-white px-3 py-1"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
