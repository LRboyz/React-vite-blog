import React from 'react';
 
class LoginPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <div>This is Login Page</div>
         );
    }
}
 
export default LoginPage;

export interface Props {
    
}
 
export interface State {
    
}