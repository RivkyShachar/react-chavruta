import React, { useEffect, useState } from 'react';
import SefariaSearch from '../common/sefariaSarch';
import { useSelector } from 'react-redux';
import translate from '../../utill/translator';

const FilterBarHome = ({
  setMin,
  setMax,
  setStartDate,
  setEndDate,
  searchTopics,
  setSearchTopics,
  setLang,
}) => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 700);
  const language = useSelector((myStore) => myStore.languageSlice.language);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>
      <nav className="navbar navbar-light  ">
        <div className="container d-flex justify-content-center">
          <button
            className="navbar-toggler btn btn-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded={isLargeScreen}
            aria-label="Toggle filter"
          >
            {translate('filter.filter', language)}
          </button>
        </div>
      </nav>
      <div className={`collapse ${isLargeScreen ? 'show' : ''}`} id="navbarToggleExternalContent">
        <div className="container ">
          <ul className="navbar-nav">
            <li className="nav-item m-2 active">
              <div className="form-group col-md-auto">
                <SefariaSearch
                  selectedTopics={searchTopics}
                  setSelectedTopics={setSearchTopics}
                />
              </div>
            </li>


            <li className="nav-item m-2">
              <div className="form-group col-md-auto">
                <label className="mr-2" htmlFor="minDuration">
                  {translate('filter.minDuration', language)}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="minDuration"
                  placeholder="Min Duration"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
            </li>
            <li className="nav-item m-2">
              <div className="form-group col-md-auto">
                <label className="mr-2" htmlFor="maxDuration">
                  {translate('filter.maxDuration', language)}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="maxDuration"
                  placeholder="Max Duration"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
            </li>
            <li className="nav-item m-2">
              <div className="form-group col-md-auto">
                <label className="mr-2" htmlFor="startDate">
                  {translate('filter.startDate', language)}:
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </li>
            <li className="nav-item m-2 mx-2">
              <div className="form-group col-md-auto">
                <label className="mr-2" htmlFor="endDate">
                  {translate('filter.endDate', language)}:
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="endDate"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </li>
            <li className="nav-item m-2">
              <div className="form-group col-md-auto">
                <label className="mr-2" htmlFor="lang">
                {translate('zoomNow.language', language)}:
                </label>
                <select
                  className="form-control"
                  id="lang"
                  onChange={(e) => setLang(e.target.value)}
                >
                  <option value="All">{translate('filter.all', language)}</option>
                  <option value="Hebrew">עברית</option>
                  <option value="English">English</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBarHome;
