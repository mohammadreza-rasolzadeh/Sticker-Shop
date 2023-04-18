import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store";
import App from "./App";
import "./index.css";
import NotFound from "./components/NotFound";
import MainLayout from "./components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  // {
  //   path: "/products/:productId",
  //   element: (
  //     <MainLayout>
  //       <ProductDetails />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "/cart",
  //   element: (
  //     <MainLayout>
  //       <CartTable />
  //     </MainLayout>
  //   ),
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
