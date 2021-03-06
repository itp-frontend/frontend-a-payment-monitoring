import { makeStyles } from "@material-ui/core/styles";
import ColorsTheme from "../assets/colors";
import FontsTheme from "../assets/fonts";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh",
        backgroundColor: ColorsTheme.grayWeb,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor: ColorsTheme.grayWeb,
    },
    leftSide: {
        flex: 1,
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorsTheme.white,
    },
    boxContainer: {
        display: "block",
        [theme.breakpoints.down('sm')]: {
            minWidth: "50%",
        },
        [theme.breakpoints.up('md')]: {
            minWidth: "60%",
        },
        paddingBottom: "50px",
        backgroundColor: ColorsTheme.white,
        borderRadius: "10px",
        boxShadow: "0px 2px 4px #676565",
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    headerLogo: {
        display: "flex",
        marginTop: "30px",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "20px",
    },
    headLogo: {
        width: "79px",
        height: "70px",
    },
    titleSection: {
        lineHeight: "37px",
        marginLeft: "9px",
        ...FontsTheme.poppins_bold,
        fontSize: "30px",
        color: ColorsTheme.Onyx,
    },
    titleSectionSpan: {
        color: ColorsTheme.pacificBlue,
    },
    txtSignIn: {
        ...FontsTheme.poppins_bold,
        fontSize: "15px",
        color: ColorsTheme.black,
        textAlign: "center",
    },
    innerBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "5%",
            paddingRight: "5%",
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: "20%",
            paddingRight: "20%",
        },
    },
    userPass: {
        width: "100%",
        backgroundColor: ColorsTheme.white,
        textAlign: "center",
    },
    wrappedTxtFieldCustomer: {
        display: "flex",
        margin: theme.spacing(1),
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingRight: "15px",
        minWidth: "100%",
        "&:before": {
            borderColor: ColorsTheme.white,
        },
        "&:after": {
            borderColor: ColorsTheme.white,
        },
        "&:not(.Mui-disabled):hover::before": {
            borderColor: ColorsTheme.white,
        },
    },
    wrappedTxtFieldOfficer: {
        display: "flex",
        margin: theme.spacing(1),
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingRight: "15px",
        minWidth: "100%",
        "&:before": {
            borderColor: ColorsTheme.white,
        },
        "&:after": {
            borderColor: ColorsTheme.white,
        },
        "&:not(.Mui-disabled):hover::before": {
            borderColor: ColorsTheme.white,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
        paddingRight: "15px",
        "&:before": {
            borderColor: ColorsTheme.white,
        },
        "&:after": {
            borderColor: ColorsTheme.white,
        },
        "&:not(.Mui-disabled):hover::before": {
            borderColor: ColorsTheme.white,
        },
    },
    wrappedRememberMe: {
        display: "flex",
        margin: theme.spacing(1),
        paddingTop: "8px",
        paddingBottom: "8px",
        minWidth: "100%",
        "&:before": {
            borderColor: ColorsTheme.white,
        },
        "&:after": {
            borderColor: ColorsTheme.white,
        },
        "&:not(.Mui-disabled):hover::before": {
            borderColor: ColorsTheme.white,
        },
    },
    wrappedSignIn: {
        display: "flex",
        padding: "0px 20px",
    },
    btnSignIn: {
        display: "flex",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px !important",
        background: "linear-gradient(45deg, #15aad9 30%, #7ee0ff 90%)",
    },
    btnSignInBold: {
        color: ColorsTheme.white,
        fontSize: "15px",
        ...FontsTheme.poppins_regular,
    },
    btnSignInLoading: {
        display: "flex",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px !important",
        background: "linear-gradient(45deg, #777777 30%, #949494 90%)",
    },
    switchSignIn: {
        color: ColorsTheme.ceruleanCrayola,
    },
    rightSide: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('md')]: {
            display: "block",
        },
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: ColorsTheme.aliceBlue,
        paddingBottom: "10%",
        paddingLeft: "5%",
    },
    welcomeTitle: {
        flex: 1,
        paddingLeft: "61px",
        paddingTop: "106px",
        width: "100%",
        paddingBottom: "48px",
    },
    welcome: {
        ...FontsTheme.roboto_bold,
        marginBottom:"0.25em",
        fontSize: "40px",
        lineHeight: "30px",
        color: ColorsTheme.Onyx,
    },
    textNotice: {
        ...FontsTheme.poppins_bold,
        fontSize: "30px",
        lineHeight: "35px",
        color: ColorsTheme.Onyx,
    },
    img: {
        flex: 2,
        width: "100%",
    },
    circledImage: {
        width: "430px",
        height: "420px",
        marginLeft: "120px",
        resize: "block",
    },
    bankerImage: {
        width: "450px",
        height: "424px",
        position: "absolute",
        top: "25%",
        left: "55%",
    },
}));

export default useStyles;