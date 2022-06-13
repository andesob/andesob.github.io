import React from 'react';
import {
    Grid,
    Stack, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {gql, useQuery} from "@apollo/client";

function Homepage({client}) {

    const handleAnalyzeClick = () => {

    }

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

    // console.log(useQuery(QUERY));
    const {loading, error, data} = useQuery(QUERY);
    if (loading || error) {
        return "Hold up";
    }
    const temp = data.guildData.guild.attendance.data;
    let arr = [];
    temp.forEach((list) => {
        list.players.forEach((char) => {
            arr.push(char.name);
        })
    })

    console.log(arr);

    return (
        <Box display="flex" justifyContent="center" paddingY={2}>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h5">
                    Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted.
                </Typography>
                <TextField id="filled-basic" variant="filled" hiddenLabel size="small" sx={{width: 1 / 2}}/>
                <Button variant="contained" onClick={handleAnalyzeClick}>
                    <Typography>
                        Analyze
                    </Typography>
                </Button>
                <Grid container spacing={2}>
                    {arr.map((name) => {
                        return <Grid item> {name} </Grid>
                    })}
                </Grid>
            </Stack>
        </Box>
    );
}

export default Homepage;