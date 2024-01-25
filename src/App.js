import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { CartProvider } from "./Components/ContextProvider/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
      <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </div>
  );
}

export default App;
