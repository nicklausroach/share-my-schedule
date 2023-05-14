<script>
    import { onMount } from 'svelte'
    import googleCalendarPlugin from '@fullcalendar/google-calendar';
    import dayGridPlugin from '@fullcalendar/daygrid'
    import listPlugin from '@fullcalendar/list'
    import FullCalendar from '../components/Calendar.svelte';
    import bootstrap5Plugin from '@fullcalendar/bootstrap5';

    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';

	import { PUBLIC_GOOGLE_CALENDAR_API_KEY, PUBLIC_GOOGLE_CALENDAR_ID } from '$env/static/public';

    let currentView;
    let innerWidth;
    let options;
    onMount(() => {
        currentView = innerWidth > 812 ? 'dayGridMonth' : 'listWeek'

        options = {
            initialView: currentView,
            themeSystem: 'bootstrap5',
            fixedWeekCount: false,
            plugins: [bootstrap5Plugin, listPlugin, dayGridPlugin, googleCalendarPlugin],
            googleCalendarApiKey: PUBLIC_GOOGLE_CALENDAR_API_KEY,
            events: {
                googleCalendarId: PUBLIC_GOOGLE_CALENDAR_ID
        }
    };
    })

  </script>
    <svelte:head>
        <title>Nicklaus Roach - Gig Calendar</title>
        <html lang="en" />
    </svelte:head>
    <svelte:window bind:innerWidth />    
    <FullCalendar {options} />

    <style>
        :root {
            --fc-today-bg-color: lightblue;
        }
        :global(html) {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
