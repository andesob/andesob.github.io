import {Grid, Stack, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import Player from "../components/Player";
import {useLocation} from "react-router-dom";

function LogPage() {
    const location = useLocation();
    const logCode = location.state.code;
    console.log(location.state.code);

    let assocArray = getPlayerInformation(logCode);
    if (!assocArray) {
        return 'Hold up';
    }

    const arr = Array.from(assocArray, ([key, value]) => {
        return Array.from(value, ([key, value]) => {
            return value;
        });
    });
    console.log(arr);
    let renderArr = [];
    arr.forEach((playerClass) => {
        playerClass.forEach((player) => {
            renderArr.push(<Grid item key={player.props.id}> {player.props.name} </Grid>);
        })
    })
    return (
        <Container maxWidth={'95%'}>
            <Box display="flex" justifyContent="center" paddingY={2}>
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h5">
                        Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted.
                    </Typography>
                    <TextField id="filled-basic" variant="filled" hiddenLabel size="small" sx={{width: 1 / 2}}/>
                    <Button variant="contained" >
                        <Typography>
                            Analyze
                        </Typography>
                    </Button>
                    <Grid container spacing={2}>
                        {renderArr}
                    </Grid>
                </Stack>
            </Box>
        </Container>
    );
}

function getPlayerInformation(logCode) {
    const PLAYER_QUERY = gql`
    {
	reportData{
		report(code:"${logCode}"){
			playerDetails(startTime:386982, endTime:13327785)
		}
	}
}`;
    const {loading, error, data} = useQuery(PLAYER_QUERY);
    if (loading || error) {
        return false;
    }

    const playerData = data.reportData.report.playerDetails.data.playerDetails;
    let playerList = new Map();

    for(const key in playerData){
        playerData[key].forEach((player) => {
            if (!playerList.has(player.type)){
                playerList.set(player.type, new Map());
                playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
            } else {
                if (!playerList.get(player.type).has(player.id)) {
                    playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
                }
            }
        });
    }

    for (const key of playerList.keys()) {
        playerList.set(key, new Map([...playerList.get(key)].sort()));
    }

    return new Map([...playerList].sort());
}

export default LogPage;