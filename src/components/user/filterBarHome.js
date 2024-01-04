import React from 'react';

const FilterBarHome = () => {
    return (
        <div className='bg-secondary'>
            
            <div className='container col-8 '>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item m-2 active">
                                <div className="form-group col-md-auto ">
                                    <label className="mr-2" htmlFor="startDate">Search Topic</label>
                                    <input type="text" className="form-control " id="searchTopic" placeholder="Search Topic" />
                                </div>
                            </li>
                            <li class="nav-item m-2">
                                <div className="form-group col-md-auto ">
                                    <label className="mr-2" htmlFor="startDate">Duration Range</label>
                                    <input type="number" className="form-control " id="durationRange" placeholder="Duration Range" />
                                </div>
                            </li>
                            <li class="nav-item m-2">
                                <label className="mr-2 " htmlFor="startDate">Start Date:</label>
                                <input type="date" className="form-control " id="startDate" />
                            </li>
                            <li class="nav-item m-2 mx-2">
                                <label className="mr-2 " htmlFor="endDate">End Date:</label>
                                <input type="date" className="form-control " id="endDate" />
                            </li>
                            <li class="nav-item m-2">
                                <label className="mr-2 " htmlFor="startHours">Start Hours:</label>
                                <input type="time" className="form-control " id="startHours" />
                            </li>
                            <li class="nav-item m-2">
                                <label className="mr-2 " htmlFor="endHours">End Hours:</label>
                                <input type="time" className="form-control " id="endHours" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default FilterBarHome;


