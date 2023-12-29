export interface Games {
    id?: number | null;
    title?: string;
    img?: string;
    short_description?: string;
    long_description?: string;
    gametype1?: number;
    gametype2?: number;
    gametype3?: number;
    published?: number;
    max_players?: number;
    age?: number; 
    likes?: number;    
    price?: number | null;
    reference?: string;
}
