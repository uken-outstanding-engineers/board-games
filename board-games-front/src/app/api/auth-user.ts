export interface AuthUser {
    id?: number | null;
    userid?: string;
    passwd?: string;
    permisson?: number;
    email? : string;
    description?: string;
    phone?: string;
    addr?: string;
    lastLogin?: string;
}