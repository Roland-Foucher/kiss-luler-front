import { ConsiderationStatus } from "./enum";

export interface Considerations {
    considerationId?: number,
    considAmount?: number,
    title?: string,
    description?: string,
    photo?: string,
    projectId?: number,
    status?: ConsiderationStatus,
}