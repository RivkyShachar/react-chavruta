import React from 'react';
import SefariaSearch from '../common/sefariaSarch';
import SefariaSelectedTopics from '../common/sefariaSelectedTopics';

const FilterBarHome = ({ setMin, setMax, setStartDate, setEndDate, searchTopics, setSearchTopics, setLang }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="collapse show" id="navbarToggleExternalContent">
                <div className="bg-light p-4">
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
                            <input type="datetime-local" className="form-control" id="startDate" onChange={(e) => setStartDate(e.target.value)} />
                        </li>
                        <li className="nav-item m-2 mx-2">
                            <label className="mr-2" htmlFor="endDate">End Date:</label>
                            <input type="datetime-local" className="form-control" id="endDate" onChange={(e) => setEndDate(e.target.value)} />
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
            </div>
        </div>
    );
}

export default FilterBarHome;
