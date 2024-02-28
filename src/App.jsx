import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./Components/ReactQuery";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
}

export default App;
