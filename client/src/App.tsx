import Router from "./router/Router.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  return    <QueryClientProvider client={queryClient}>
                <Router/>
            </QueryClientProvider>;
}

export default App