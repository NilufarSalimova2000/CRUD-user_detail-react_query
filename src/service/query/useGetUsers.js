import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: () => request.get("/todos").then((res) => res.data)
    });
}