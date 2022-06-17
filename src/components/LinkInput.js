import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LinkInput() {
    const [logCode, setLogCode] = useState('');

    const handleInput = event => {
        setLogCode(event.target.value);
    }

    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h5">
                Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted.
            </Typography>
            <TextField id="filled-basic" onChange={handleInput} variant="filled" hiddenLabel size="small"
                       sx={{width: 1 / 2}}/>
            <Button variant="contained"
                    onClick={() => navigate('/logpage', {replace: true, state: {code: logCode}})}>
                <Typography>
                    Analyze
                </Typography>
            </Button>
        </>
    );
}

export default LinkInput;