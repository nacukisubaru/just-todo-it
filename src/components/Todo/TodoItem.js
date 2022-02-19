import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSetComplete } from "../../api/apiHooks/todoHooks";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

export default function TodoItem(todo) {
    const setComplete = useSetComplete();
    console.log(todo.props.isComplete);
    return (
        <div className="wrapper">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={13}>
                        <Item>
                            <Box sx={{ display: "flex", flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8} md={8}>
                                        <FormControl
                                            sx={{ m: 1 }}
                                            component="fieldset"
                                            variant="standard"
                                        >
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            onChange={() => {
                                                                setComplete.changeComplete(
                                                                    todo.props
                                                                        .id
                                                                );
                                                            }}
                                                            defaultChecked={
                                                                todo.props
                                                                    .isComplete
                                                            }
                                                            name="gilad"
                                                        />
                                                    }
                                                    label={
                                                        <span
                                                            className={
                                                                "todo-is-complete-" +
                                                                todo.props
                                                                    .isComplete
                                                            }
                                                        >
                                                            {todo.props.title}
                                                        </span>
                                                    }
                                                />
                                            </FormGroup>
                                        </FormControl>
                                        <FormControl
                                            required
                                            component="fieldset"
                                            sx={{ m: 3 }}
                                            variant="standard"
                                        ></FormControl>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        md={4}
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                        }}
                                    >
                                        <StarBorderIcon
                                            style={{
                                                marginTop: "18px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
