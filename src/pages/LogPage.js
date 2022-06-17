import {CircularProgress, Grid, Stack} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import {useLocation} from "react-router-dom";
import LogGridRow from "../components/LogGridRow";
import LinkInput from "../components/LinkInput";

function LogPage() {
    const location = useLocation();
    const logCode = location.state.code;
    // console.log(location.state.code);
    const fightIds = getAllFightInformation(logCode);
    const playerMap = getPlayerInformation(logCode);
    const temp = getEventInformation(logCode, 9, fightIds);
    if (!temp || !playerMap) {
        return (
            <Container maxWidth={'95%'}>
                <Box display="flex" justifyContent="center" paddingY={2}>
                    <Stack spacing={2} alignItems="center">
                        <LinkInput/>
                        <CircularProgress/>
                    </Stack>
                </Box>
            </Container>
        );
    }


    const auraList = parseCombatantInfo(playerMap, temp);
    const sortedMap = sortPlayersByNameAndClass(playerMap);

    // console.log(sortedMap);

    let renderArr = [];

    sortedMap.forEach((player) => {
        const gridRow = <LogGridRow key={"logGridRow" + player.get('id')} player={player} auras={auraList.get(player.get('id'))} encounters={fightIds}/>
        renderArr.push(gridRow);
    })

    return (
        <Container maxWidth={'95%'}>
            <Box display="flex" justifyContent="center" paddingY={2}>
                <Stack spacing={2} alignItems="center">
                    <LinkInput/>
                    <Grid key={"GridContainer"} container style={{backgroundColor: "black", color: "white"}}>
                        <Grid item container key={"GridHeaderName"} style={{backgroundColor: "darkslategray"}} padding={1}>
                            <Grid item xs={2} key={"GridHeaderName"}>
                                <Typography variant={"h5"}>
                                    Player
                                </Typography>
                            </Grid>
                            <Grid item xs={2} key={"GridHeaderEncounters"}>
                                <Typography variant={"h5"}>
                                    Encounters
                                </Typography>
                            </Grid>
                            <Grid item xs={8} paddingLeft={2} key={"GridHeaderAuras"}>
                                <Typography variant={"h5"}>
                                    Auras
                                </Typography>
                            </Grid>
                        </Grid>
                        {renderArr}
                    </Grid>
                </Stack>
            </Box>
        </Container>
    );
}

function sortPlayersByNameAndClass(playerList) {
    const classSortMap = new Map();
    const playerNameSortMap = new Map();

    playerList.forEach((player) => {
        playerNameSortMap.set(player.get('name'), player);
    });

    const sortedPlayerNameMap = new Map([...playerNameSortMap].sort());

    sortedPlayerNameMap.forEach((player) => {
        if (!classSortMap.has(player.get('playerClass'))) {
            classSortMap.set(player.get('playerClass'), new Map());
        }
        classSortMap.get(player.get('playerClass')).set(player.get('name'), player);
    });

    const sortedMap = new Map([...classSortMap].sort());

    const fullySortedMap = new Map();
    sortedMap.forEach((playerClass) => {
        playerClass.forEach((player) => {
            // console.log(player);
            fullySortedMap.set(player.get('name'), player)
        })
    })

    // console.log(fullySortedMap);
    return fullySortedMap;
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

    // console.log(playerClassList);

    return playerList;
}

// function getTableInformation(logCode, playerID) {
//     const TABLE_QUERY = gql`
//     {
// 	reportData{
// 		report(code:"${logCode}"){
// 			table(startTime:386982, endTime:13327785)
// 		}
// 	}
// }`;
//
//     const {loading, error, data} = useQuery(TABLE_QUERY);
//     if (loading || error) {
//         return false;
//     }
//
//     const temp = data.reportData.report.table.data;
//     // console.log(temp);
//
//     temp.forEach((evt) => {
//         // console.log(evt);
//     });
//
//     return false;
// }

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

//     const CAST_INFO_QUERY = gql`
//     {
// 	reportData{
// 		report(code:"${logCode}"){
// 			events(startTime:0, endTime:99999999, fightIDs:[${fightIds}], dataType: Casts){
// 				data
// 			}
// 		}
// 	}
// }`;

    // console.log(fightIds);
    const {loading, error, data} = useQuery(COMBATANT_INFO_QUERY);
    // const {loading, error, data} = useQuery(CAST_INFO_QUERY);

    if (loading || error) {
        // console.log(error);
        return false;
    }
    const combatantInfo = data.reportData.report.events.data;
    // const castInfo = data.reportData.report.events.data;
    // console.log("YOLOOOOO")
    // console.log(combatantInfo);
    combatantInfo.forEach((event) => {
            // console.log(event);
        if (event.type === "combatantinfo") {
        }
    })
    // return false;


    // console.log(combatantInfo);
    return combatantInfo;
}

function parseCombatantInfo(playerMap, combatantInfoList) {
    const auraList = new Map();
    // console.log(playerMap);
    combatantInfoList.forEach((event) => {
        const player = playerMap.get(event.sourceID);
        // console.log(event.auras);
        player.get('auras').push(event.auras);

        if (!auraList.has(event.sourceID)) {
            auraList.set(event.sourceID, [event.auras]);
        } else {
            auraList.get(event.sourceID).push(event.auras);
        }
        // if (event.sourceID === 9) {
        //     auraList.push(event.auras);
        // }
    });

    return auraList;
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