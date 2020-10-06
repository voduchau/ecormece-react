import React from 'react';

export const DashBoardContent = React.createContext();


const DashBoardProvider = ({props}) => {
    return ( 
        <DashBoardContent.Provider>
            {props.children}
        </DashBoardContent.Provider>
     );
}
 
export default DashBoardProvider;
