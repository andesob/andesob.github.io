import {Button, Grid, Link, Stack} from "@mui/material";
import React from "react";
import {Image} from "@mui/icons-material";

function LogGridRow(props) {
    const auraWhitelist = [33263,33261,33268,39625,17538,17627,28540,41605,28519,11406,28509,28520,11371,28497,28521,46840,39627,28491,41606,46838,33256];
    const player = props.player;
    const auras = props.auras;
    // console.log(auras);
    // console.log(player);
    const auraMap = parseAurasToDisplay(player, auras);
    const auraElements = createAuraElements(auraMap, auraWhitelist);
    // console.log(auraElements);
    return (
        <Grid item container padding={1}>
            <Grid item xs={2} key={player.get('name')} color={getClassColor(player.get('playerClass'))}> {player.get('name')} </Grid>
            {/*<Grid item xs={2} key={"class" + player.get('id')}> {player.get('playerClass')} </Grid>*/}
            {/*<Grid item xs={8} key={"aura" + player.get('id')}>*/}
            <Grid container item xs={10}>
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

function createAuraElements(auras, whitelist) {
    const elementList = [];
    auras.forEach((aura) => {
        if (whitelist.includes(aura.abilityID)) {
            const element = <Stack alignItems={"center"} maxWidth={"35px"} paddingX={1}>
                <Grid item display={"flex"} justifyContent={"center"} key={"auraName" + aura.name}>
                    <Button variant={"text"} style={{minWidth: "10px", padding: 0}} href={"https://tbc.wowhead.com/spell=" + aura.abilityID}>
                        <img width={"100%"} src={"https://wow.zamimg.com/images/wow/icons/large/" + aura.icon} alt={aura.icon}/>
                    </Button>
                </Grid>
                <Grid item key={"auraNameCount" + aura.name}>{aura.count}</Grid>
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