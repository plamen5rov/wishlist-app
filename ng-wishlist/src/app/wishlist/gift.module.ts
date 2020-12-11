export interface Gift {
    id: number;
    name: string;
    occasion: string;
    description: string;
    date?: Date;
    price: number;
    imageUrl: string;
    booked: boolean;
    author: string
}