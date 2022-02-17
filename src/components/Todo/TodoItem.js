import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

export default function TodoItem(todo) {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <div className="wrapper">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={13}>
                        <Item>
                            <Box sx={{ display: "flex" }}>
                                <FormControl
                                    sx={{ m: 1 }}
                                    component="fieldset"
                                    variant="standard"
                                >
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={gilad}
                                                    onChange={handleChange}
                                                    name="gilad"
                                                />
                                            }
                                            label={todo.props.title}
                                        />
                                    </FormGroup>
                                </FormControl>
                                <FormControl
                                    required
                                    error={error}
                                    component="fieldset"
                                    sx={{ m: 3 }}
                                    variant="standard"
                                ></FormControl>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
