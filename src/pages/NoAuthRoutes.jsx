import React from "react";

function NoAuthRoutes({ auth, children }) {
    if(auth){
        return <div>your already loggin</div>;
    }
return children;
};

export default NoAuthRoutes;