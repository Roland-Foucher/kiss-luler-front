import { Considerations } from "./considerations";

export interface Project {

    id?: number;
    title?: string;
    userName?: string;
    photo?: string;
    category?: string;
    considerationsAmount?: number,
    date?: string;
    consideration?: Considerations[];
    amountInit?: number,
    description?: string,

}