import React from 'react';
import './contact-form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    textField: {
        width: 1500
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

                <h1>
                    Always in touch!
                </h1>

                <p max-width="300px">
                    If you have any questions or you just want to say "Hello!", Write to me
                </p>
                
                <div className="contact-form__inputs">

                    <TextField className={classes.root}
                        id="with-placeholder"
                        label="Name"
                        margin="normal"
                        className="classes.textField"
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
                        rowsMax="4"
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