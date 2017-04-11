import React from 'react';
import { Route } from 'react-router';

// import App from './App';
import PostsIndex from './components/posts_index';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={PostsIndex} />
            </div>
        )
    }
}

export default Routes;