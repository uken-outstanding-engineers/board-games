export interface AuthUser {
    id?: number | null;
    userid?: string;
    passwd?: string;
    permison?: number;
    description?: string;
    phone?: string;
    addr?: string;
    lastLogin?: string;
}