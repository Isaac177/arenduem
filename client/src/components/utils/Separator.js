import React from 'react';


const Separator = ({children}) => {
    return (
        <div className="mb-12 flex flex-col"
             style={{width: window.innerWidth < 640 ? '30%' : '1080px'}}>
            {children}
        </div>
    );
};

export default Separator;