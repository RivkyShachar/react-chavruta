import React, { useState, useEffect } from 'react';
import SefariaSearch from '../common/sefariaSarch';
import SefariaSelectedTopics from '../common/sefariaSelectedTopics';

const FilterBarHome = ({ setMin, setMax, setStartDate, setEndDate, searchTopics, setSearchTopics, setLang }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
   
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className={`col-md-2 ${!sidebarOpen ? 'd-none' : ''} b sidebar mt-4`}>
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item  active">
                                <div className="form-group  col-md-6 col-lg-8">
                                    <SefariaSearch selectedTopics={searchTopics} setSelectedTopics={setSearchTopics} />
                                </div>
                            </li>
                            <li className="nav-item ">
                                <div className="form-group col-6  col-md-6 col-lg-8 my-1 ">
                                    <label className="" htmlFor="durationRange">Min Duration</label>
                                    <input type="number" className="form-control col-4" id="minDuration" placeholder="Min Duration" onChange={(e) => setMin(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item ">
                                <div className="form-group  col-md-6 col-lg-8  my-1">
                                    <label className="" htmlFor="durationRange">Max Duration</label>
                                    <input type="number" className="form-control " id="maxDuration" placeholder="Max Duration" onChange={(e) => setMax(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item ">
                                <div className="form-group  col-md-6 col-lg-8  my-1">
                                    <label className="" htmlFor="startDate">Start Date:</label>
                                    <input type="datetime-local" className="form-control col-4 " id="startDate" onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="form-group  col-md-6 col-lg-8  my-1">
                                    <label className="" htmlFor="endDate">End Date:</label>
                                    <input type="datetime-local" className="form-control col-4 " id="endDate" onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                            </li>
                            <li className="nav-item ">
                                <div className="form-group  col-md-6 col-lg-8  my-1">

                                    <label className="" htmlFor="lang">Language:</label>
                                    <select className="form-control " id="lang" onChange={(e) => setLang(e.target.value)}>
                                        <option value="All">All</option>
                                        <option value="Hebrew">Hebrew</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Content */}
                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <button className="btn btn-warning d-md-none" onClick={toggleSidebar}>
                        {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                    </button>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                {/* Additional content goes here */}
                            </div>
                        </div>
                        <SefariaSelectedTopics selectedTopics={searchTopics} setSelectedTopics={setSearchTopics} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default FilterBarHome;