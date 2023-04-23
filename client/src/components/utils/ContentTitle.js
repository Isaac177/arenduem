import React from 'react';



const ContentTitle = ({children}) => {
    return (
        <div className="flex items-start border-b border-black px-4 py-2">
            {children}
        </div>
    );
};

export default ContentTitle;