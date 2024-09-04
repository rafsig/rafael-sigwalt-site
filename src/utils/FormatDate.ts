export function formatMonthYear(date:Date) {
    const convertedDate = new Date(date);
    const options = { year: 'numeric', month: 'short'};
    return convertedDate.toLocaleDateString('en-US', options);
}