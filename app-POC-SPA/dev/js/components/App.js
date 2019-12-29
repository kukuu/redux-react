//Bundles containers
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';


require('../../scss/style.scss');

const App = () => (
    <div>
        
    	<h1>Intro</h1>
        <UserList />
        <hr />
        <UserDetails />

    </div>
);

export default App;


