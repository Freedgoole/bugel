import {useEffect} from "react";

const useBodyOverflow = (isOpen) => {
    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        };

        handleBodyOverflow(); // Застосовуємо стилі при завантаженні компонента

        // Підписуємося на зміни isOpen і встановлюємо/знімаємо стилі відповідно
        return () => {
            handleBodyOverflow();
        };
    }, [isOpen]);
};

export default useBodyOverflow;