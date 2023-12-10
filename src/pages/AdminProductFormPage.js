import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import ProductForm from "../features/admin/components/ProductForm";

function AdminProductFormPage() {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </div>
  );
}

export default AdminProductFormPage;
