import { useEffect, useState, useRef } from "react"

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    
    const fromRef = useRef()
    const [isNearScreen, setShow] = useState(false)

    useEffect( () => {

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })
        element && observer.observe(element)
        return () => observer.disconnect()
    })
    return { isNearScreen, fromRef }
}