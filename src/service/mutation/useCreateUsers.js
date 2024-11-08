import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useCreateUsers = () => {
    return useMutation({
        mutationFn: (data) => {
            return request.post("/todos", data).then((res) => res.data)
        }
    }) 
}
    