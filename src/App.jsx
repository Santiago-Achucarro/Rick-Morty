import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Main } from "./Components/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
