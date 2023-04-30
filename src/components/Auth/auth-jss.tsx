import { createUseStyles } from 'react-jss';
import colors from '../styling/colors';
import { CARD_SHADOW, BUTTON_PRIMARY, INPUT_TEXT } from '../styling/styling';

const useStyles = createUseStyles({
    root: {
        padding: '40px 20px',
        marginBottom: '40px',
        marginTop: '40px',
        width: '460px',
        height: 'fit',
        margin: 'auto',
        backgroundColor: colors["text-gray-100"],
        '&.card-shadow': CARD_SHADOW,
        '& .title': {
            fontWeight: '800',
            fontSize: '22px',
            color: colors["text-gray-800"],
        },
        '& .social': {
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            'btnFacebook': {
                width: '160ox',
                height: '25px',
                borderRadius: '4px',
                background: '#3b5998',
                color: 'white',
                border: '0px transparent',
                textAlign: 'center',
                margin: '5px',
                display:'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-evenly'
            },
        },
        '& .subtitle': {
            color: colors['text-gray-700'],
            fontWeight: '400',
        },
        '& .button-primary': BUTTON_PRIMARY,
        '& .input-text': {
            ...INPUT_TEXT,
            marginTop: '12px',
            marginBottom: '12px'
        },
        '& .form-link': {
            '& a': {
                color: colors['text-gray-700'],
                '& span': {
                    fontWeight: 500,
                },
            },
        },
    },
});

export default useStyles;