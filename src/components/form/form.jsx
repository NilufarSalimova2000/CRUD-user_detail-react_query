import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({dataSubmit}) => {
    const { handleSubmit, reset, register } = useForm();
    const submit = (data) => {
        dataSubmit(data);
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <Stack gap={"20px"} my={"30px"} width={"400px"}>
                    <TextField placeholder="Enter title" {...register("title")} />
                    <TextField placeholder="Enter description" {...register("description")} />
                    <Button type="submit" variant="contained">Add</Button>
                </Stack>
            </form>
        </div>
    )
}