import React from 'react';
import './contact-form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
    typography: {
     "fontFamily": "Raleway",
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });

const styles = theme => ({
    textField: {
    },
  });
  

class ContactForm extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            
            <div className="contact-form">
                <h5>
                    CONTACTS
                </h5>

                <h1 span class="contact-always">
                    Always in touch!
                </h1>

                <p span class="contact-hello">
                    If you have any questions or you just want to say "Hello!", Write to me
                </p>
                
                <div className="contact-form__inputs">

                    <TextField 
                        classes={{
                            root: classes.root,
                            label: classes.label,
                            underline: classes.underline,
                        }}
                        id="with-placeholder"
                        label="Name"
                        margin="normal"
                    />

                    <TextField
                        id="with-placeholder"
                        label="E-mail"
                        margin="normal"
                        className="classes.textField"
                    />

                    <TextField
                        id="multiline-flexible"
                        label="Message"
                        multiline
                        rowsMax="8"
                        margin="normal"
                    />

                    <Button id="button">
                        SEND MESSAGE
                    </Button>

                </div>
            </div>
        );
    }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);