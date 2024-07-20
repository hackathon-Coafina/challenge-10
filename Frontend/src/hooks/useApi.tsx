import { useEffect, useState } from "react"

export const useApi = () => {
  
    const [data, setData] = useState<object|null>(null)

    /* useEffect */
    useEffect(() => {}, [])
  
    return (
    <div>useApi</div>
  )
}
