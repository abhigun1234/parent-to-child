import React from 'react';

function Child(props) {
 console.log("props of child",props)
    return (
        <div>
           {/* <button onClick={()=>props.callParent("hello")}>call</button>  */}
           <button onClick={()=>props.callParent("sending data to parent componet")}>call parent</button>
        </div>
    );
}

export default Child;