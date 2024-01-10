export interface User {
    id?: number | null;
    username?: string;
    passwd?: string;
    permisson?: number;
    email? : string;
    description?: string;
    phone?: string;
    addr?: string;
    lastLogin?: string;
    likedGames?: LikedGame[];
}

export interface LikedGame {
    date?: Date;
    game?: {
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
    };
}