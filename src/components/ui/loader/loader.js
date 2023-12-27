import React from 'react'
import { Dna } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div className='flex-col items-center text-center'>
            {/* <Dna
                visible={true}
                height="150"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{ margin: 0 }}
                wrapperClass="dna-wrapper"
            /> */}

            <p className='text-4xl font-mono'> loading...</p>
        </div>
    )
}

export default Loader