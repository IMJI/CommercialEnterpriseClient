class DateFormatter {
    public static toTableFormat(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleDateString("ru-RU", options);
    }
}

export default DateFormatter;