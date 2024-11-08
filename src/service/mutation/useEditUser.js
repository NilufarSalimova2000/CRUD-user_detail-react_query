import { client } from "../../config/query-client";
import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useEditUser = () => {
    return useMutation({
        mutationFn: ({id, data}) => request.patch(`/todos/${id}`, data).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        }
    })
}