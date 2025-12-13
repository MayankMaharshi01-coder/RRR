import React from "react";

function AuthRoutes({ auth, children }) {
    if(!auth){
        return <div>login please</div>;
    }
return children;
};

export default AuthRoutes;