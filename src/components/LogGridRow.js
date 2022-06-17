import {Button, Grid, Stack} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

function LogGridRow(props) {
    const auraWhitelist = [33263, 33261, 33268, 39625, 17538, 17627, 28540, 41605, 28519, 11406, 28509, 28520, 11371, 28497, 28521, 46840, 39627, 28491, 41606, 46838, 33256];
    const player = props.player;
    const auras = props.auras;
    const encounters = props.encounters;
    // console.log(auras);
    // console.log(player);
    const auraMap = parseAurasToDisplay(player, auras);
    const auraElements = createAuraElements(auraMap, auraWhitelist, player);
    return (
        <Grid sx={{borderBottom: 1}} key={"logGridRowContainer" + player.get('id')} item container padding={1}>
            <Grid item xs={2} style={{display: "flex", alignItems: "center"}} key={"rowPlayerName" + player.get('name')}
                  color={getClassColor(player.get('playerClass'))}>
                <Typography>
                    {player.get('name')}
                </Typography>
            </Grid>
            <Grid item xs={2} style={{display: "flex", alignItems: "center"}}>
                <Typography>
                    {player.get('auras').length}
                    /
                    {encounters.length}
                </Typography>
            </Grid>
            {/*<Grid item xs={2} key={"class" + player.get('id')}> {player.get('playerClass')} </Grid>*/}
            {/*<Grid item xs={8} key={"aura" + player.get('id')}>*/}
            <Grid container item xs={8} key={"GridAuraContainer" + player.get('id')}>
                {auraElements}
            </Grid>
            {/*</Grid>*/}
        </Grid>
    );
}

function getClassColor(playerClass) {
    let classColors = new Map([
        ["Druid", "#FF7C0A"],
        ["Hunter", "#AAD372"],
        ["Mage", "#3FC7EB"],
        ["Paladin", "#F48CBA"],
        ["Priest", "#FFFFFF"],
        ["Rogue", "#FFF468"],
        ["Shaman", "#0070DD"],
        ["Warlock", "#8788EE"],
        ["Warrior", "#C69B6D"]
    ]);
    return classColors.get(playerClass);
}

function createAuraElements(auras, whitelist, player) {
    const elementList = [];
    auras.forEach((aura) => {
        if (whitelist.includes(aura.abilityID)) {
            const element = <Stack key={"stack" + player.get('id') + aura.name} alignItems={"center"} maxWidth={"35px"}
                                   paddingX={1}>
                <Grid item display={"flex"} justifyContent={"center"} key={"auraName" + aura.name + player.get('id')}>
                    <Button key={"button" + player.get('id') + aura.name} variant={"text"}
                            style={{minWidth: "10px", padding: 0}}
                            href={"https://tbc.wowhead.com/spell=" + aura.abilityID}>
                        <img width={"100%"} src={"https://wow.zamimg.com/images/wow/icons/large/" + aura.icon}
                             alt={aura.icon}/>
                    </Button>
                </Grid>
                <Grid item key={"auraNameCount" + aura.name + player.get('name')}>{aura.count}</Grid>
            </Stack>;
            elementList.push(element);
        }
    })
    return elementList;
}

function parseAurasToDisplay(player, auras) {
    let auraMap = new Map();

    auras.forEach((auraFight) => {
        auraFight.forEach((aura) => {
            if (!auraMap.has(aura.ability)) {
                auraMap.set(aura.ability, {abilityID: aura.ability, icon: aura.icon, name: aura.name, count: 1});
            } else {
                auraMap.get(aura.ability).count++;
            }
        });
    })

    // player.get('auras').forEach((auraFight) => {
    //     auraFight.forEach((aura) => {
    //         // console.log(aura.ability);
    //         if (!auraMap.has(aura.ability)) {
    //             auraMap.set(aura.ability, {abilityID: aura.ability, icon: aura.icon, name: aura.name, count: 0});
    //         } else {
    //             auraMap.get(aura.ability).count++;
    //         }
    //     });
    // });
    return auraMap;
}

export default LogGridRow;