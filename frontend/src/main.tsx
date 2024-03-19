import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import "./index.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './contexts/AppContext';

const queryClient =new QueryClient({
  defaultOptions:{
    queries:{
      retry:0,
    }
  }
})


ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
   
    </QueryClientProvider>
   
  </Router>,
  document.getElementById('root')
);
