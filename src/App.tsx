import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "./components/Container";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
}

export default App;
