import { Provider } from 'react-redux';
import AppRoutes from './appRoutes.js';
import myStore from './redux/myStore';
import './App.css';
// Add these lines to your entry file (e.g., index.js or App.js)
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Add Font Awesome icons to the library
library.add(fas);

function App() {
  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  );
}

export default App;