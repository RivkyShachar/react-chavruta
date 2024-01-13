import React, { useState } from 'react';
import axios from 'axios';

const ZoomMeetingButton = () => {
  const [zoomLink, setZoomLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(30);
  const [subject, setSubject] = useState('');
  const [language, setLanguage] = useState('');

  const startZoomMeeting = async () => {
    try {
      setLoading(true);

      // Assuming you have a user ID from authentication
      const userId = localStorage.getItem('USER_ID');

      // Make a POST request to your server's /startZoomMeeting endpoint
      const response = await axios.post('https://chavruta.onrender.com/zoom/startZoomMeeting', {
        userId,
        duration,
        subject,
        language,
      });

      // If the request is successful, update the state with the Zoom link
      setZoomLink(response.data.zoomLink);

      // Open the Zoom link in a new tab
      window.open(response.data.zoomLink, '_blank');

      // Open the Sefaria link in a new tab
      window.open('https://www.sefaria.org.il/texts', '_blank');
    } catch (error) {
      console.error('Error starting Zoom meeting:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Fill in the details for your Zoom meeting</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration (minutes):
          </label>
          <input
            type="number"
            className="form-control"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="language" className="form-label">
            Language:
          </label>
          <input
            type="text"
            className="form-control"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={startZoomMeeting} disabled={loading}>
          {loading ? 'Loading...' : 'Start Zoom Meeting'}
        </button>
      </form>

      {zoomLink && (
        <div className="mt-4">
          <p>Zoom Meeting Link:</p>
          <a href={zoomLink} target="_blank" rel="noopener noreferrer">
            {zoomLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default ZoomMeetingButton;
