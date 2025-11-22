import { useEffect, useState } from "react";
import { getProductById, saveProduct } from "../api/mockApi";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../data/mockProducts";

const emptyProduct: Product = {
  id: "",
  name: "",
  brand: "",
  category: "",
  description: "",
  price: 0,
  stock: 0,
  warranty: "1 Year",
  previewImage: "",
  thumbnailImage: "",
};

export const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>(emptyProduct);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      getProductById(id).then((p) => {
        if (p) setProduct(p);
      });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageFileChange =
    (field: "previewImage" | "thumbnailImage") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setProduct((prev) => ({ ...prev, [field]: url }));
    };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await saveProduct(product);
    setSaving(false);
    navigate("/products");
  };

  return (
    <div className="bg-white dark:bg-slate-800 max-w-3xl p-6 rounded-xl border border-gray-200 dark:border-slate-700">
      <h1 className="text-xl font-bold mb-4">
        {id ? "Edit Product" : "Add Product"}
      </h1>

      <form onSubmit={save} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <input
          name="name"
          placeholder="Product Name"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.name}
          onChange={handleChange}
        />

        {/* Brand */}
        <input
          name="brand"
          placeholder="Brand"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.brand}
          onChange={handleChange}
        />

        {/* Category */}
        <input
          name="category"
          placeholder="Category (e.g. Smartphones, Laptops)"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.category}
          onChange={handleChange}
        />

        {/* Stock */}
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.stock}
          onChange={(e) =>
            setProduct((prev) => ({
              ...prev,
              stock: Number(e.target.value),
            }))
          }
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.price}
          onChange={(e) =>
            setProduct((prev) => ({
              ...prev,
              price: Number(e.target.value),
            }))
          }
        />

        {/* Warranty */}
        <select
          name="warranty"
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700"
          value={product.warranty}
          onChange={handleChange}
        >
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3 Years">3 Years</option>
        </select>

        {/* Preview Image (file + URL) */}
        <div className="md:col-span-1 space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-100">
            Preview Image
          </label>
          <label className="block cursor-pointer">
            <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-gray-50 dark:bg-slate-700 h-32 text-xs text-slate-400 overflow-hidden">
              {product.previewImage ? (
                <img
                  src={product.previewImage}
                  alt="Preview"
                  className="h-full object-contain"
                />
              ) : (
                "Click to upload or drag & drop"
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageFileChange("previewImage")}
            />
          </label>
          <input
            name="previewImage"
            placeholder="or paste image URL"
            className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700 w-full"
            value={product.previewImage}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-1 space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-100">
            Thumbnail Image
          </label>
          <label className="block cursor-pointer">
            <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-gray-50 dark:bg-slate-700 h-32 text-xs text-slate-400 overflow-hidden">
              {product.thumbnailImage ? (
                <img
                  src={product.thumbnailImage}
                  alt="Thumbnail"
                  className="h-full object-contain"
                />
              ) : (
                "Click to upload or drag & drop"
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageFileChange("thumbnailImage")}
            />
          </label>
          <input
            name="thumbnailImage"
            placeholder="or paste image URL"
            className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700 w-full"
            value={product.thumbnailImage}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          rows={3}
          className="p-3 rounded-md border dark:border-slate-600 bg-gray-50 dark:bg-slate-700 md:col-span-2"
          value={product.description}
          onChange={handleChange}
        />

        <div className="col-span-full flex justify-end mt-2 gap-2">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="px-6 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
