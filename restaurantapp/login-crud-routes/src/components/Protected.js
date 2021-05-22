import React from 'react';
import { Redirect, Route } from 'react-router-dom';
//stateless component
const Protected = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('login') ? (
                <Cmp {...props} />
            ) : <Redirect to="/login"></Redirect>
        }
    >
    </Route>
)
export default Protected;
