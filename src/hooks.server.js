import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';

// Import client credentials from json file
// import client_secret from '../client_secret.json';
const client = {
    client_id: '262746310927-tamdlemfbk3jhode72lbi5928k6f3vtf.apps.googleusercontent.com',
    client_secret: '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'
}

const auth = new SvelteGoogleAuthHook(client);

export const handle = async ({ event, resolve }) => {
	return await auth.handleAuth({ event, resolve });
};