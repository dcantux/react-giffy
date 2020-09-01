import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'


const TrendingSearches = React.lazy( () => 
    import('./TrendingSearches')
)

export default function LazyTreanding() {
    /* Ver   */

/*     const [show, setShow] = useState(false)

    const elementRef = useRef()

    useEffect( () => {
        const onChange = (entries) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe(elementRef.current)
        return () => observer.disconnect()
    }, []) */
    const {isNearScreen, fromRef } = useNearScreen({ distance: '10px'})

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {
                isNearScreen ? <TrendingSearches /> : <Spinner />
            }
        </Suspense>
    </div>
}
