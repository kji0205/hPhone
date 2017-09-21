import React from 'react';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from '../imports/ui/App.jsx';

FlowRouter.route('/todo', {
    action() {
        // <App />
        // mount(null, {
        //     content: (<App />)
        // })
        render(<App />, document.getElementById('render-target'));
    }
});
