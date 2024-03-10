export interface Client {
    first_name: string;
    last_name: string;
    mail: string;
    phone: string;
    address: string;
    city: string;
    zip_code: string;
    country: string;
    number_of_guests: number;
    arrival_date: Date;
    departure_date: Date;
    price: number;
    comment: string;
}

export interface FullDates {
    start: Date;
    end: Date;
}

export interface ApiResponseDates {
    success: boolean;
    data: FullDates[];
}
