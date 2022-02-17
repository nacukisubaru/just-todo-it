import React from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

export default function CreateTodo() {
    return (
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
                                />
                            </FormControl>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
