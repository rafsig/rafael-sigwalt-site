export function formatMonthYear(date:Date) {
    const convertedDate = new Date(date);
    return convertedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short'});
}