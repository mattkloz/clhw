import * as UserData from '../users.json';
import * as depracations from '../depracations.json';

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        // set depracations header
        const depracatedList = JSON.stringify(depracations);
        event.node.res.setHeader('depracations', depracatedList)
        // return all users
        return UserData;
    };

    // included just for reference
    if (event.node.req.method === 'POST') {
        // create a user
        // return the user;
    };
}
);
