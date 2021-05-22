import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
//staeless component
const Logout = () => {
    localStorage.clear();
    return <Redirect to="/login"></Redirect>

}
export default Logout;