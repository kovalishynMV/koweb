import React from 'react';
import './contact-form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = {
    button: {
        border: 'solid 1px #172bff',
        borderRadius: '2px',
        marginTop: '50px',
        width: '300px',
        height: '54px',
        fontFamily: 'Raleway',
        fontSize: '12px',
        fontWeight: '600',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '2px',
        textAlign: 'center',
        color: '#172bff',

        '&:hover': {
            backgroundColor: '#172bff',
            boxShadow: '0 15px 35px 0 rgba(23, 43, 255, 0.12)',
            color: '#fff',
            transition: 'all 180ms',
          },

        '&:disabled': {
            backgroundColor: 'rgba(231, 232, 234, 0.5)',
            color:'#b6b9c8',
            border: '0px',
        }
    },

    TextField: {
        fontFamily: 'Raleway',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#b6b9c8',

        '&:after': {
            backgroundColor: '#fff',
        }
    }
  };

  function ContactForm(props) {


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
                    <form className="contact-form__inputs">
                        <TextField
                            className={props.classes.TextField}
                            id="with-placeholder"
                            label="Name"
                            margin="normal">
                        </TextField>

                        <TextField
                            className={props.classes.TextField}
                            id="with-placeholder"
                            label="E-mail" 
                            argin="normal">
                        </TextField>

                        <TextField
                            className={props.classes.TextField}
                            id="multiline-flexible"
                            label="Message"
                            multiline
                            rowsMax="8"
                            margin="normal">
                        </TextField>

                        <Button disabled className={props.classes.button} >
                            {props.children ? props.children : 'SEND MESSAGE'}
                        </Button>
                    </form>
                </div>
        );
    }

ContactForm.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ContactForm);