import React from 'react';



const ContentTitle = ({children}) => {
    return (
        <div className="border-b border-black py-2 flex items-start px-4">
            {children}
        </div>
    );
};

export default ContentTitle;