// useLocalStorageWatcher.jsx
import { useEffect } from 'react';

const useLocalStorageWatcher = (key, callback) => {
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key && !event.newValue) {
                callback();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, callback]);
};

export default useLocalStorageWatcher;
