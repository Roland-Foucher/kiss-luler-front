import { ProjectCategory } from "./enum";


export interface ProjectCreate {


     description?: string;
     dateInit?: Date;
     dateEnd?: Date;
     category?: ProjectCategory;
     name?: string;
     amountInit?: number;

    

}


