import { useEffect, useState } from "react"

export function useHeaders<T = unknown>(url: string, header: string) {
    const [headers, setHeaders] = useState<string | number | null>(null)
    
    useEffect(() => {
        fetch(url)
            .then(response => {
                setHeaders(response.headers.get(header))
            })
    }, [])

    return { headers, setHeaders }
}