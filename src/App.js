import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <h1>
          <Head />
          <RouterProvider router={appRouter} />
        </h1>
      </div>
    </Provider>
  );
}

export default App;
