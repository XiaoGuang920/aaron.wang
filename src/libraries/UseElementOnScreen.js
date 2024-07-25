import { useRef, useState, useEffect } from 'react';

const useElementOnScreen = (options) => {
    const container_ref = useRef(null);

    const [is_visible, setIsVisible] = useState(false);

    const observerCallback = (entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
        }        
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, options);

        const current_ref = container_ref.current;
        if (current_ref) observer.observe(current_ref);

        return () => {
            if (current_ref) observer.unobserve(current_ref);
        };
    }, [container_ref, options]);

    return [container_ref, is_visible];
};

export default useElementOnScreen;
