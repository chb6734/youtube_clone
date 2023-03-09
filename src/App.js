import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />

      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
