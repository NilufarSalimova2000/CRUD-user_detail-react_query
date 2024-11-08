import React from "react";
import { useGetUsers } from "../../service/query/useGetUsers";
import { Box, Container, Typography } from "@mui/material";
import { Card } from "../../components/card";
import { Form } from "../../components/form";
import { useCreateUsers } from "../../service/mutation/useCreateUsers";
import { useQueryClient } from "@tanstack/react-query";

export const Home = () => {
    const {data, isLoading, error} = useGetUsers();
    const {mutate} = useCreateUsers();
    const client = useQueryClient()
    const submit = (data) =>{
        mutate(data,{
            onSuccess: () => {
                client.invalidateQueries(["todos"]);
            }
        })
        console.log(data);
    }
    return (
        <Container>
            <Form dataSubmit={submit} />
            <Box>
                {isLoading ? (
                    <Typography variant="h2">Loading...</Typography>
                ) : (
                    data?.map((item) => <Card key={item.id} {...item}/>)
                )}
            </Box>
        </Container>
    )
}