<script>
	import { invalidateAll } from '$app/navigation';
	import { signIn, signOut, initialize } from 'svelte-google-auth/client';

	export let data;
	initialize(data, invalidateAll);
    console.log(data)
    fetch(
        `https://www.googleapis.com/calendar/v3/calendars/alcq03m9p4tlr4s1ka3esov327vi9hfh@import.calendar.google.com
/events?key=AIzaSyA7hCbyHJFUhsnnMXfzVoEuCXLGwWcEauY`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data.auth.access_token}`
            }
        }
    ).then(res => console.log(res.json()))
</script>

{data.auth.user?.name}
<button on:click={() => signIn()}>Sign In</button>
<button on:click={() => signOut()}>Sign Out</button>