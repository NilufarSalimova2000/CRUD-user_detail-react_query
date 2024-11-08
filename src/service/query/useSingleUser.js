import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useSingleUser = (id) => {
    return useQuery({
        queryKey: ["single-user", id],
        queryFn: () => request.get(`/todos/${id}`).then((res) => res.data)
    })
}