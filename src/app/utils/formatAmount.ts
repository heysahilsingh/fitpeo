
const formatAmount = (number: number, suffix?: boolean) => {
    if (suffix) {
        // Check if the number is greater than or equal to a trillion
        if (number >= 1_000_000_000_000) return (number / 1_000_000_000_000).toFixed(2).toLocaleString() + 'T';
        // Check if the number is greater than or equal to a billion
        else if (number >= 1_000_000_000) return (number / 1_000_000_000).toFixed(2).toLocaleString() + 'B';
        // Check if the number is greater than or equal to a million
        else if (number >= 1_000_000) return (number / 1_000_000).toFixed(2).toLocaleString() + 'M';
        // Check if the number is greater than or equal to a thousand
        else if (number >= 1_000) return (number / 1_000).toFixed(2).toLocaleString() + 'K';
        else return number.toFixed(2).toLocaleString();
    } else {
        return number.toFixed(2).toLocaleString();
    }
}

export default formatAmount