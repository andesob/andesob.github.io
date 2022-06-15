import React, {useCallback, useState} from 'react';
import {
    Grid,
    Stack, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {gql, useQuery} from "@apollo/client";
import Container from "@mui/material/Container";
import Player from "../components/Player";
import {Link, useNavigate} from "react-router-dom";


function Homepage() {

    const [logCode, setLogCode] = useState('');

    const handleInput = event => {
        setLogCode(event.target.value);
        console.log("Input code is: " + event.target.value);
    }

    const navigate = useNavigate();
    return (
        <Container maxWidth={'95%'}>
            <Box display="flex" justifyContent="center" paddingY={2}>
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h5">
                        Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted.
                    </Typography>
                    <TextField id="filled-basic" onChange={handleInput} variant="filled" hiddenLabel size="small" sx={{width: 1 / 2}}/>
                    <Button variant="contained" onClick={() => navigate('/logpage', {replace: true, state: {code: logCode}})}>
                        <Typography>
                            Analyze
                        </Typography>
                    </Button>
                    <Grid container spacing={2}>
                    </Grid>
                </Stack>
            </Box>
        </Container>
    );
}

function getPlayerInformation() {
    const PLAYER_QUERY = gql`
    {
	reportData{
		report(code:"6qZLQG8N7gyvh4Td"){
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
            // console.log(playerList);
            if (!playerList.has(player.type)){
                playerList.set(player.type, new Map());
                playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
            } else {
                if (!playerList.get(player.type).has(player.id)) {
                    playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
                    // playerList[player.id] = <Player id={player.id} name={player.name} playerClass={player.type}/>;
                }
            }
        });
    }

    for (const key of playerList.keys()) {
        playerList.set(key, new Map([...playerList.get(key)].sort()));
    }

    return new Map([...playerList].sort());
}

function getEventInformation() {
    const EVENT_QUERY = gql`
    {
	reportData{
		report(code:"6qZLQG8N7gyvh4Td"){
			events(startTime:386982, endTime:13327785){
				data
			}
		}
	}
}`;

    const {loading, error, data} = useQuery(EVENT_QUERY);
    if (loading || error) {
        return false;
    }

    const temp = data.reportData.report.events.data;

    let arr = [];
    let playerArr = {};
    let count = 0;
    temp.forEach((event) => {
        if (event.type === 'combatantinfo' && !playerArr.hasOwnProperty(event.sourceID)) {
            count++;
            playerArr[event.sourceID] = event;
        }
        if (event.type === 'heal' && event.sourceID === 9) {
            arr.push(event);
        }
    })
    // console.log(Object.keys(playerArr).length);
    console.log(playerArr);

    return arr;

}

function getMemberInformation() {
    const QUERY = gql`
    query {
	guildData{
		guild(id:480659){
			attendance{
				data{
					players{
						name
					}
				}
			}
		}
	}
}`;

    const {loading, error, data} = useQuery(QUERY);
    if (loading || error) {
        return false;
    }
    const temp = data.guildData.guild.attendance.data;
    let arr = [];
    temp.forEach((list) => {
        list.players.forEach((char) => {
            if (!arr.includes(char.name)) {
                arr.push(char.name);
            }
        })
    })
    return arr;
}

export default Homepage;