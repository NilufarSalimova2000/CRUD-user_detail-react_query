import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDeleteUsers } from "../../service/mutation/useDeleteUsers";
import { Link } from "react-router-dom";
import { useEditUser } from "../../service/mutation/useEditUser";

export const Card = ({ title, description, id }) => {
    const { mutate } = useDeleteUsers();
    const { mutate: patch } = useEditUser();
    const [isOpen, setOpen] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);

    const deleteUser = () => {
        mutate(id, {
            onSuccess: (res) => {
                console.log(res);
            }
        });
    };

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const editUser = () => {
        patch(
            { id: id, data: { title: editTitle, description: editDescription } },
            {
                onSuccess: () => {
                    closeModal();
                }
            }
        );
    };

    return (
        <Box width={"400px"} mb={"20px"}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h4">{description}</Typography>
            <Stack direction="row" spacing={2} mt={2}>
                <Button onClick={deleteUser} color="error" variant="contained">
                    Delete
                </Button>
                <Link to={`/user-detail/${id}`}>
                    <Button color="info" variant="contained">
                        Show
                    </Button>
                </Link>
                <Button onClick={openModal} color="success" variant="contained">
                    Edit
                </Button>
            </Stack>

            <Modal open={isOpen} onClose={closeModal}>
                <Box
                    padding={4}
                    bgcolor="background.paper"
                    margin="auto"
                    width={300}
                    borderRadius={2}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    <Typography variant="h6">User edit</Typography>
                    <TextField
                        fullWidth
                        label="Title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        margin="normal"
                    />
                    <Button onClick={editUser} color="primary" variant="contained">
                        Save
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};
