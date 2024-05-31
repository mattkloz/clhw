import * as UserData from '../users.json';

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        // return all users
        return UserData;
    }
    // included just for reference
    if (event.node.req.method === 'POST') {
        // create a user
        // return the user;
    }
}
);
