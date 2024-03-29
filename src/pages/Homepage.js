import React from 'react';
import {
    Stack
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinkInput from "../components/LinkInput";


function Homepage() {
    return (
        <Container maxWidth={'95%'}>
            <Box display="flex" justifyContent="center" paddingY={2}>
                <Stack spacing={2} alignItems="center">
                    <LinkInput/>
                </Stack>
            </Box>
        </Container>
    );
}

// function getPlayerInformation() {
//     const PLAYER_QUERY = gql`
//     {
// 	reportData{
// 		report(code:"6qZLQG8N7gyvh4Td"){
// 			playerDetails(startTime:386982, endTime:13327785)
// 		}
// 	}
// }`;
//     const {loading, error, data} = useQuery(PLAYER_QUERY);
//     if (loading || error) {
//         return false;
//     }
//
//     const playerData = data.reportData.report.playerDetails.data.playerDetails;
//     let playerList = new Map();
//
//     for(const key in playerData){
//         playerData[key].forEach((player) => {
//             // console.log(playerList);
//             if (!playerList.has(player.type)){
//                 playerList.set(player.type, new Map());
//                 playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
//             } else {
//                 if (!playerList.get(player.type).has(player.id)) {
//                     playerList.get(player.type).set(player.name, <Player id={player.id} name={player.name} playerClass={player.type}/>);
//                     // playerList[player.id] = <Player id={player.id} name={player.name} playerClass={player.type}/>;
//                 }
//             }
//         });
//     }
//
//     for (const key of playerList.keys()) {
//         playerList.set(key, new Map([...playerList.get(key)].sort()));
//     }
//
//     return new Map([...playerList].sort());
// }

// function getEventInformation() {
//     const EVENT_QUERY = gql`
//     {
// 	reportData{
// 		report(code:"6qZLQG8N7gyvh4Td"){
// 			events(startTime:386982, endTime:13327785){
// 				data
// 			}
// 		}
// 	}
// }`;
//
//     const {loading, error, data} = useQuery(EVENT_QUERY);
//     if (loading || error) {
//         return false;
//     }
//
//     const temp = data.reportData.report.events.data;
//
//     let arr = [];
//     let playerArr = {};
//     let count = 0;
//     temp.forEach((event) => {
//         if (event.type === 'combatantinfo' && !playerArr.hasOwnProperty(event.sourceID)) {
//             count++;
//             playerArr[event.sourceID] = event;
//         }
//         if (event.type === 'heal' && event.sourceID === 9) {
//             arr.push(event);
//         }
//     })
//     // console.log(Object.keys(playerArr).length);
//     console.log(playerArr);
//
//     return arr;
//
// }

// function getMemberInformation() {
//     const QUERY = gql`
//     query {
// 	guildData{
// 		guild(id:480659){
// 			attendance{
// 				data{
// 					players{
// 						name
// 					}
// 				}
// 			}
// 		}
// 	}
// }`;
//
//     const {loading, error, data} = useQuery(QUERY);
//     if (loading || error) {
//         return false;
//     }
//     const temp = data.guildData.guild.attendance.data;
//     let arr = [];
//     temp.forEach((list) => {
//         list.players.forEach((char) => {
//             if (!arr.includes(char.name)) {
//                 arr.push(char.name);
//             }
//         })
//     })
//     return arr;
// }

export default Homepage;