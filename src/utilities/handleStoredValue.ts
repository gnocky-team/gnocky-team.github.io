import type { Setter } from "solid-js";


export const handleStoredValue = (
    key: string,
    enumType: any,
    setter: Setter<any>
) => {
    const storedValue = sessionStorage.getItem(key);

    if (storedValue) {
        try {
            const parsedValue = JSON.parse(storedValue);

            if (Object.values(enumType).includes(parsedValue)) {
                setter(parsedValue);
            }
        } catch {}
    }
};