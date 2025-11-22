import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../api/mockApi";
import type { Product } from "../data/mockProducts";

type FormState = {
  name: string;
  brand: string;
  category: string;
  description: string;
  price: string;
  stock: string;
  warranty: string;
  previewImage: string;
  thumbnailImage: string;
};

const initialForm: FormState = {
  name: "",
  brand: "",
  category: "",
  description: "",
  price: "",
  stock: "",
  warranty: "1 Year",
  previewImage: "",
  thumbnailImage: "",
};

export const AddProductPage = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageFileChange =
    (field: "previewImage" | "thumbnailImage") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, [field]: url }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.category || !form.price || !form.brand) {
      setError("Product name, brand, category and price are required.");
      return;
    }

    setSaving(true);
    try {
      const newProduct: Product = {
        id: "",
        name: form.name,
        brand: form.brand,
        category: form.category,
        description: form.description,
        price: Number(form.price),
        stock: form.stock ? Number(form.stock) : 0,
        warranty: form.warranty,
        previewImage: form.previewImage || "",
        thumbnailImage: form.thumbnailImage || "",
      };

      await saveProduct(newProduct);
      navigate("/products");
    } catch (err) {
      console.error(err);
      setError("Failed to save product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Add New Product
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Cancel
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/40 px-4 py-2 text-sm text-red-700 dark:text-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* General Information */}
          <section className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-5">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              General Information
            </h2>

            {/* Product Name */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Product Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>

            {/* Brand */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Brand
              </label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Brand (e.g. Apple, Samsung)"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Product Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              >
                <option value="">Select category</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Laptops">Laptops</option>
                <option value="Headphones">Headphones</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                rows={4}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500 resize-none"
              />
            </div>
          </section>

          {/* Preview & Thumbnail */}
          <section className="space-y-4">
            {/* Preview Image */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Preview Image
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                Drag and drop your image here or click to upload
              </p>

              <label className="flex flex-col gap-3 cursor-pointer">
                <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-40 text-xs text-slate-400 dark:text-slate-500 overflow-hidden">
                  {form.previewImage ? (
                    <img
                      src={form.previewImage}
                      alt="Preview"
                      className="h-full object-contain"
                    />
                  ) : (
                    "Drag and drop here or click"
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
                value={form.previewImage}
                onChange={handleChange}
                placeholder="or paste image URL"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>

            {/* Thumbnail Image */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Thumbnail Image
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                Drag and drop your image here or click to upload
              </p>

              <label className="flex flex-col gap-3 cursor-pointer">
                <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-40 text-xs text-slate-400 dark:text-slate-500 overflow-hidden">
                  {form.thumbnailImage ? (
                    <img
                      src={form.thumbnailImage}
                      alt="Thumbnail"
                      className="h-full object-contain"
                    />
                  ) : (
                    "Drag and drop here or click"
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
                value={form.thumbnailImage}
                onChange={handleChange}
                placeholder="or paste image URL"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>
          </section>
        </div>

        {/* Pricing + Stock + Warranty */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Price */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stock */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="Available units"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              />
            </div>

            {/* Warranty */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Warranty
              </label>
              <select
                name="warranty"
                value={form.warranty}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-500"
              >
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
              </select>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};
