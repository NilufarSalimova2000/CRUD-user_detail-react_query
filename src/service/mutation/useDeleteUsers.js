import { client } from "../../config/query-client";
import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteUsers = () => {
    return useMutation({
        mutationFn: (id) => request.delete(`/todos/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        }
    })
}