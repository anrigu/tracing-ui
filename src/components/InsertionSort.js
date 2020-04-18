import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

/**
 * Function used to create a main area for the components
 */
class InsertionSort extends React.Component {
    render() {
        return(
            <Button onClick= {()=>this.props.history.push('/home')}>
                Text
            </Button>
        )
    }
}
export default withRouter(InsertionSort);