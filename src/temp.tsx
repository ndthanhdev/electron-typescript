import * as React from 'react';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import Routes from '../routes';

// type Props = {
//     store: any,
//     history: any
// }

export default class Root extends React.Component<undefined, undefined> {
    // render() {
    //     return (
    //         <Provider store={this.props.store}>
    //             <ConnectedRouter history={this.props.history}>
    //                 <Routes />
    //             </ConnectedRouter>
    //         </Provider>
    //     );
    // }
    render() {
        return (
            <div>
                <h2>Welcome to React with Typescript!</h2>
            </div>
        );
    }
}
