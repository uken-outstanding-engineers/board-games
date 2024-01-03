export interface Games {
    id?: number | null;
    title?: string;
    img?: string;
    shortDescription?: string;
    longDescription?: string;
    gametype1?: number;
    gametype2?: number;
    gametype3?: number;
    published?: number;
    maxPlayers?: number;
    age?: number; 
    likes?: number;    
    price?: number | null;
    reference?: string;
}
