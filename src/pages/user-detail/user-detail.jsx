import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../service/query/useSingleUser";

export const UserDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useSingleUser(id);

    return (
        <Container>
            <Typography variant="h1" textAlign={"center"}>User detail</Typography>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Box>
                    <Typography variant="h2">{data?.title}</Typography>
                    <Typography variant="h3">{data?.description}</Typography>
                </Box>
            )}

        </Container>
    )
}