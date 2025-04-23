interface CurrentYearProps {
    class?: string;
}

export const CurrentYear = ({ class: className }: CurrentYearProps) => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <span class={className}>{currentYear}</span>
    );
};