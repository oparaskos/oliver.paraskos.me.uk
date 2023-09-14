
export interface Profile {
    network: string;
    url: string;
    username: string;
}

export interface Basics {
    name: string;
    label: string;
    description: string;
    location?: {
        city: string;
    };
    profiles?: Profile[];
}