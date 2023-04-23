import React from 'react';


const Separator = ({children}) => {
    return (
        <div className="mb-12 flex flex-col sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4"
             style={{width: "1080px"}}>
            {children}
        </div>
    );
};

export default Separator;