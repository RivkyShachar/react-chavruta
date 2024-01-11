import React from 'react';
// import Sefaria1 from '../common/sefaria1';
import SefariaSearch from '../common/sefariaSarch';
import SefariaSelectedTopics from '../common/sefariaSelectedTopics';



const FilterBarHome = ({ setMin, setMax, setStartDate, setEndDate, searchTopics, setSearchTopics, setLang }) => {


    return (
        <div>
            <div className='container-fluid col-12 bg-light'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarFilter"
                        aria-controls="navbarFilter"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-chevron-double-down"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarFilter">
                        <ul className="navbar-nav">
                            <li className="nav-item m-2 active">
                                <div className="form-group col-md-auto ">
                                    <SefariaSearch selectedTopics={searchTopics} setSelectedTopics={setSearchTopics} />
                                </div>
                            </li>
                            <li className="nav-item m-2">
                                <div className="form-group col-md-auto ">
                                    <label className="mr-2" htmlFor="durationRange">Min Duration</label>
                                    <input type="number" className="form-control" id="minDuration" placeholder="Min Duration" onChange={(e) => setMin(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item m-2">
                                <div className="form-group col-md-auto ">
                                    <label className="mr-2" htmlFor="durationRange">Max Duration</label>
                                    <input type="number" className="form-control" id="maxDuration" placeholder="Max Duration" onChange={(e) => setMax(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item m-2">
                                <label className="mr-2" htmlFor="startDate">Start Date:</label>
                                <input type="datetime-local" className="form-control " id="startDate" onChange={(e) => setStartDate(e.target.value)} />
                            </li>
                            <li className="nav-item m-2 mx-2">
                                <label className="mr-2" htmlFor="endDate">End Date:</label>
                                <input type="datetime-local" className="form-control " id="endDate" onChange={(e) => setEndDate(e.target.value)} />
                            </li>
                            <li className="nav-item m-2">
                                <label className="mr-2" htmlFor="lang">Language:</label>
                                <select className="form-control" id="lang" onChange={(e) => setLang(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Hebrew">Hebrew</option>
                                    <option value="English">English</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='row'>
                    <SefariaSelectedTopics selectedTopics={searchTopics} setSelectedTopics={setSearchTopics} />
                </div>
            </div>
        </div>
    );
}

export default FilterBarHome;


