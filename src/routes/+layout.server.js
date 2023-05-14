import { redirect } from '@sveltejs/kit';
import { hydrateAuth, isSignedIn, generateAuthUrl } from 'svelte-google-auth/server';

const SCOPES = ['openid', 'profile', 'email', 'https://www.googleapis.com/auth/calendar.events.readonly'];

export const load = ({ locals, url }) => {
	if (!isSignedIn(locals)) {
		throw redirect(302, generateAuthUrl(locals, url, SCOPES, url.pathname));
	}
	// By calling hydateAuth, certain variables from locals are parsed to the client
	// allowing the client to access the user information and the client_id for login
	return { ...hydrateAuth(locals) };
};