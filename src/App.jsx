import { request } from "./config/request"
import { useQuery } from "@tanstack/react-query"

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => request.get("/todos").then((res) => res.data)
  })
  return (
    <>
      {data?.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
      
    </>
  )
}

export default App
