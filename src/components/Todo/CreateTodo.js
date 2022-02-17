import React from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useAddTodo } from "../../api/apiHooks/todoHooks";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useChangeInputHandler } from "../../api/apiHooks/eventHandlerHooks";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

export default function CreateTodo() {
    const addTodoHook = useAddTodo();
    const inputChange = useChangeInputHandler('');

    const submitHandler = (event) => {
        event.preventDefault();
        addTodoHook.addTodo(inputChange.state.addTodoField);
    };

    return (
        <form onSubmit={submitHandler}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item>
                            <Box sx={{ display: "flex" }}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="component-simple">
                                        Что нужно сделать...
                                    </InputLabel>

                                    <Input
                                        id="component"
                                        style={{
                                            width: 1500,
                                            maxWidth: "100%",
                                            visibility: "none",
                                        }}
                                        onChange={(event)=>{inputChange.setField(event)}}
                                        name="addTodoField"
                                    />
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Button variant="outlined" startIcon={<SaveIcon />} type="submit">
                save
            </Button>
        </form>
    );
}
