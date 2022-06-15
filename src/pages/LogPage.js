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
    const fightIds = getAllFightInformation(logCode);
    const playerMap = getPlayerInformation(logCode);
    const temp = getEventInformation(logCode, 9, fightIds);
    if (!temp || !playerMap) {
        return 'Hold up';
    }

    let playerClassMap = temp[0];

    parseCombatantInfo(playerMap, temp);

    console.log(playerMap);

    const arr = Array.from(playerMap, ([key, value]) => {
        return <Player id={value.get('id')} name={value.get('name')} playerClass={value.get('playerClass')} auras={value.get('auras')}/>;
    });

    console.log(arr);
    let renderArr = [];
    arr.forEach((player) => {
        const gridRow = <>
            <Grid item xs={2} key={player.props.name}> {player.props.name} </Grid>
            <Grid item xs={2} key={"class" + player.props.id}> {player.props.playerClass} </Grid>
            <Grid item xs={8} key={"aura" + player.props.id}> {player.props.auras.length} </Grid>
        </>;
        renderArr.push(gridRow);
    })
    // console.log(renderArr);
    return (
        <Container maxWidth={'95%'}>
            <Box display="flex" justifyContent="center" paddingY={2}>
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h5">
                        Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted.
                    </Typography>
                    <TextField id="filled-basic" variant="filled" hiddenLabel size="small" sx={{width: 1 / 2}}/>
                    <Button variant="contained">
                        <Typography>
                            Analyze
                        </Typography>
                    </Button>
                    <Grid key={"GridContainer"} container spacing={2}>
                        <Grid item xs={2} key={"GridHeaderName"}>
                            <Typography variant={"h5"}>
                                Player
                            </Typography>
                        </Grid>
                        <Grid item xs={2} key={"GridHeaderClass"}>
                            <Typography variant={"h5"}>
                                Class
                            </Typography>
                        </Grid>
                        <Grid item xs={8} key={"GridHeaderAuras"}>
                            <Typography variant={"h5"}>
                                Auras
                            </Typography>
                        </Grid>
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
    let playerClassList = new Map();
    let playerList = new Map();
    for(const key in playerData){
        playerData[key].forEach((player) => {
            // const playerObj = <Player id={player.id} name={player.name} playerClass={player.type}/>;
            const playerObj = {id: player.id, name: player.name, playerClass: player.type, auras: []};
            const playerObjMap = new Map(Object.entries(playerObj));
            playerList.set(player.id, playerObjMap);

            if (!playerClassList.has(player.type)) {
                playerClassList.set(player.type, new Map());
                playerClassList.get(player.type).set(player.name, playerObjMap);
            } else {
                if (!playerClassList.get(player.type).has(player.id)) {
                    playerClassList.get(player.type).set(player.name, playerObjMap);
                }
            }
        });
    }

    for (const key of playerClassList.keys()) {
        playerClassList.set(key, new Map([...playerClassList.get(key)].sort()));
    }

    return playerList;
}

function getTableInformation(logCode, playerID) {
    const TABLE_QUERY = gql`
    {
	reportData{
		report(code:"${logCode}"){
			table(startTime:386982, endTime:13327785)
		}
	}
}`;

    const {loading, error, data} = useQuery(TABLE_QUERY);
    if (loading || error) {
        return false;
    }

    const temp = data.reportData.report.table.data;
    console.log(temp);

    temp.forEach((evt) => {
        console.log(evt);
    });

    return false;
}

function getEventInformation(logCode, playerID, fightIds) {
    fightIds = Array.isArray(fightIds) ? fightIds : [];
    const COMBATANT_INFO_QUERY = gql`
    {
	reportData{
		report(code:"${logCode}"){
			events(startTime:0, endTime:99999999, fightIDs:[${fightIds}], dataType: CombatantInfo){
				data
			}
		}
	}
}`;

    const CAST_INFO_QUERY = gql`
    {
	reportData{
		report(code:"${logCode}"){
			events(startTime:0, endTime:99999999, fightIDs:[${fightIds}], dataType: Casts){
				data
			}
		}
	}
}`;

    // console.log(fights);
    const {loading, error, data} = useQuery(COMBATANT_INFO_QUERY);
    // const {loading, error, data} = useQuery(CAST_INFO_QUERY);

    if (loading || error) {
        console.log(error);
        return false;
    }
    const combatantInfo = data.reportData.report.events.data;

    if (loading || error) {
        console.log(error);
        return false;
    }
    // const castInfo = data.reportData.report.events.data;


    combatantInfo.forEach((event) => {
            // console.log(event);
        if (event.type === "combatantinfo") {
        }
    })
    // return false;


    console.log(combatantInfo);
    return combatantInfo;
}

function parseCombatantInfo(playerMap, combatantInfoList) {
    const auraList = [];
    console.log(playerMap);
    combatantInfoList.forEach((event) => {
        const player = playerMap.get(event.sourceID);
        player.get('auras').push(event.auras);
        // if (event.sourceID === 9) {
        //     auraList.push(event.auras);
        // }
    });
    // console.log(auraList);
}

function getAllFightInformation(logCode) {
    const EVENT_QUERY = gql`
    {
	reportData{
		report(code:"${logCode}"){
			fights{
				name
				bossPercentage
				encounterID
				id
			}
		}
	}
}`;

    const {loading, error, data} = useQuery(EVENT_QUERY);
    if (loading || error) {
        return false;
    }

    const temp = data.reportData.report.fights;
    const fights = [];
    temp.forEach((fight) => {
        if (fight.encounterID !== 0) {
            fights.push(fight.id);
        }
    })
    return fights;
}

export default LogPage;