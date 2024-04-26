import React, { useState } from 'react';


const WithAuth = (WrappedComponent)=>{
    const NewComponent = (props)=>{
        const [auth,setAuth] = useState(false)

        return (
            <WrappedComponent {...props} auth={[auth,setAuth]} />
        )
    }

    return NewComponent
}

export default WithAuth;