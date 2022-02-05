import React from 'react';

function Child(props) {
 
    return (
        <div>
           <button onClick={props.callParent}>call</button> 
        </div>
    );
}

export default Child;