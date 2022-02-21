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
import { useChangeTodoImportant } from "../../api/apiHooks/todoHooks";
import StarIcon from "@mui/icons-material/Star";
import { useFilterTodoListByImportant } from "../../api/apiHooks/todoHooks";
import { useDeleteTodo } from "../../api/apiHooks/todoHooks";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

export default function TodoItem(todo) {
    const setComplete = useSetComplete();
    const todoImportant = useChangeTodoImportant();
    const filterByImportant = useFilterTodoListByImportant();
    const removeTodo = useDeleteTodo();

    const styleEnable = { marginTop: "18px", display: "block" };
    const styleDisable = { marginTop: "18px", display: "none" };

    let starDisableStyle = styleEnable;
    let starEnableStyle = styleDisable;
    if (todo.props.isImportant) {
        starDisableStyle = styleDisable;
        starEnableStyle = styleEnable;
    }

    const handlerClickImportantOff = () => {
        todoImportant.updateImportant(todo.props.id);
        filterByImportant.filter();
    };

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
                                        <IconButton
                                            aria-label="delete"
                                            type="submit"
                                            size="medium"
                                            style={{ marginTop: "11px"}}
                                            onClick={()=>{removeTodo.deleteTodo(todo.props.id)}}
                                        >
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        

                                        <IconButton
                                            aria-label="delete"
                                            type="submit"
                                            size="medium"
                                            style={starDisableStyle}
                                            onClick={() => {
                                                todoImportant.updateImportant(
                                                    todo.props.id
                                                );
                                            }}
                                        >
                                            <StarBorderIcon fontSize="inherit" />
                                        </IconButton>
                                        
                                        <IconButton
                                            aria-label="delete"
                                            type="submit"
                                            size="medium"
                                            style={starEnableStyle}
                                            onClick={handlerClickImportantOff}
                                        >
                                            <StarIcon fontSize="inherit"/>
                                        </IconButton>
                                    
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
