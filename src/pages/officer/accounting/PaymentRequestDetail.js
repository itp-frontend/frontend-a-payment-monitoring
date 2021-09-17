// Material ui core
import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Table,
    TableBody,
    TableContainer,
  
} from "@material-ui/core";
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ContentContainer from "../../../components/ContentContainer";
import PaymentStatusSelector from "../../../components/PaymentStatusSelector";
import useStyles from "../../../styles/HasilFormPayement";

function PaymentRequestDetail(props) {
    const classes = useStyles();
    const handleClickGoBack = () => {
        props.history.goBack();
      }

    return (
        <ContentContainer role="generalSupport">
            <div
                style={{
                    width: "100%",
                    paddingBottom: "1em",
                }}
            >
                <Typography variant="h5">Payment Request</Typography>
            </div>
            <div className={classes.root}>
                <Card className={classes.cardRequest}>
                    <Container fixed>
                        <CardContent>
                            <TableContainer className={classes.table}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        <PaymentStatusSelector/>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Container>
                    <CardActions className={classes.cardActions}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonAction}
                            onClick={handleClickGoBack}
                            startIcon={<ArrowBackIosRoundedIcon />}
                            >
                            Kembali
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonAction}
                            endIcon={<SaveRoundedIcon />}
                            // onClick={handleClickNewPayment}
                            >
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </ContentContainer>
    );
}

export default PaymentRequestDetail;