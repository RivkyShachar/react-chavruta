import React, { useState } from 'react';
import axios from 'axios';

const ZoomMeetingButton = () => {
  const [zoomLink, setZoomLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(30);
  const [subject, setSubject] = useState('');
  const [language, setLanguage] = useState('');
  const [durationOptions, setDurationOptions] = useState([5, 10, 20, 40]);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [languageOptions, setLanguageOptions] = useState(['English', 'Hebrew']);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [allowMultiplePeople, setAllowMultiplePeople] = useState(false);
  const [subjectOptions, setSubjectOptions] = useState(['תנ"ך', 'הלכה', 'חסידות', 'הכל']);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [allowMoreThan2People, setAllowMoreThan2People] = useState(null);
  const [allowOptions] = useState(['Yes', 'No']);

  const startZoomMeeting = async () => {
    try {
      setLoading(true);

      const userId = localStorage.getItem('USER_ID');
      const response = await axios.post('https://chavruta.onrender.com/zoom/startZoomMeeting', {
        userId,
        duration,
        subject,
        language,
      });

      setZoomLink(response.data.zoomLink);

      window.open(response.data.zoomLink, '_blank');
      window.open('https://www.sefaria.org.il/texts', '_blank');
    } catch (error) {
      console.error('Error starting Zoom meeting:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-10 col-12 bg-light p-4'>
          <h2 className="my-4 display-5 text-center text-primary">Zoom now</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">
                Duration (minutes):
              </label>
              <div className="btn-group d-flex">
                {durationOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`btn btn-outline-warning ${selectedDuration === option ? 'active' : ''}`}
                    onClick={() => setSelectedDuration(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
              <div className="btn-group d-flex">
                {subjectOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`btn btn-outline-primary ${selectedSubject === option ? 'active' : ''}`}
                    onClick={() => setSelectedSubject(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="language" className="form-label">
                Language:
              </label>
              <div className="btn-group d-flex">
                {languageOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`btn btn-outline-success ${selectedLanguage === option ? 'active' : ''}`}
                    onClick={() => setSelectedLanguage(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Allow more than 2 people?
              </label>
              <div className="btn-group d-flex">
                {allowOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`btn btn-outline-danger ${allowMoreThan2People === option ? 'active' : ''}`}
                    onClick={() => setAllowMoreThan2People(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className='mb-3'>
              <button
                type="button"
                className="btn btn-primary d-flex justify-content-center mx-auto"
                onClick={startZoomMeeting}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Start Zoom Meeting'}
              </button>
            </div>
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
      </div>
    </div>
  );
};

export default ZoomMeetingButton;
