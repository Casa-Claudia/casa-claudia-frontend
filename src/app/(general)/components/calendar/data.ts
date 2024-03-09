export interface DateRange {
    start: Date;
    end: Date;
}


export const ReservedDates: DateRange[] = [
    {
        start: new Date(2024, 2, 9),
        end: new Date(2024, 2, 23)
    },
    {
        start: new Date(2024, 3, 13),
        end: new Date(2024, 3, 27)
    },
    {
        start: new Date(2024, 3, 27),
        end: new Date(2024, 4, 18)
    }
];