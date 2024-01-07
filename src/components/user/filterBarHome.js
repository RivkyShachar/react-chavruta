import React from 'react';

const FilterBarHome = ({ setMin, setMax, setStartDate, setEndDate, setSearchTopic, setLang }) => {
    const backgroundColor = {
        backgroundColor: '#F6F6F6', // Replace with your actual pink color code
    };
   
    return (
        <div style={backgroundColor}>
            <div className='container col-10 '>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item m-2 active">
                                <div className="form-group col-md-auto ">
                                    <label htmlFor="searchTopic">Search Topic</label>
                                    <input type="text" className="form-control " id="searchTopic" placeholder="Search Topic" onChange={(e) => setSearchTopic(e.target.value)} />
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
            </div>
        </div>
    );
}

export default FilterBarHome;
