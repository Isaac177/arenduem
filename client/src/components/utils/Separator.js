import React from 'react';


const Separator = ({children}) => {
    return (
        <div className="flex flex-col  sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 mb-12"
             style={{width: "1080px"}}>
            {/*bg-gray-50 rounded-xl shadow-xl backdrop-filter
        backdrop-blur-md bg-opacity-60*/}
            {children}
        </div>
    );
};

export default Separator;