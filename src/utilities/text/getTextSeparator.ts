export const getTextSeparator = (
    position: number, length: number
): string | null => {
    const last = length - 1;
    const secondToLast = length - 2;

    if (position < secondToLast) return ", ";
    if (position < last) return " y ";

    return null;
};