import { Provider } from 'react-redux';
import AppRoutes from './appRoutes.js';
import myStore from './redux/myStore';
import './App.css';

function App() {

  // const zoomMeetingLink = "https://us05web.zoom.us/j/88204599411?pwd=XS2IfztdSXPYYVNi288qLM8hKVQTqt.1";

  // const startMeeting = () => {
  //   window.open(zoomMeetingLink);
  // }

  return (
    <Provider store={myStore}>
      <AppRoutes />
      {/* <button onClick={startMeeting}>Start Meeting</button> */}
    </Provider>
  );
}

export default App;