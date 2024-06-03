export { iUser };

declare global {
    interface iUser {
        name: string;
        title: string;
        avatar: string;
        quote: string;
        nationality: string;
    }
};