import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
// redux
import { store } from "@store";
import { Provider } from "react-redux";
// styles
import "bootstrap/dist/css/bootstrap.min.css";

import "@styles/global.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
