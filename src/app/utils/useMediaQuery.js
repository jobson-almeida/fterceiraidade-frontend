"use client"
import { useEffect, useState } from "react";


//useMediaQuery("(min-width: 1200px)");

export default function useMediaQuery(query) {
    const getMatches = (query) => {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches
        }
        return false
    }

    const [matches, setMatches] = useState(getMatches(query))

    function handleChange() {
        setMatches(getMatches(query))
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        // Acionado na primeira carga do lado do cliente e se a consulta for alterada
        handleChange()

        // ouvindo matchMedia
        matchMedia.addEventListener('change', handleChange)
 

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return matches
}