<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';

	let classes = null;
	let innerWidth = 0;
	let currentView = innerWidth > 812 ? 'dayGridMonth' : 'listWeek'

	export { classes as class };

	export let style = null;

	export let options;

	export function getAPI() {
		return calendar;
	}

	let calendarEl;
	let calendar;

	onMount(async () => {
		if (!canBeInitiated) return;

		initCalendar();

		return () => {
			calendar && calendar.destroy();
		};
	});

	$: canBeInitiated =
		options && options.plugins && options.plugins.length && calendarEl && !calendar;

	$: {
		if (calendar && options && options.plugins && options.plugins.length) updateCalendarOptions();

		if (canBeInitiated) {
			initCalendar();
		}
	}

	function initCalendar() {
		calendar = new Calendar(calendarEl, options);
		calendar.render();
	}

	function updateCalendarOptions() {
		calendar.pauseRendering();
		calendar.resetOptions(options);
		calendar.resumeRendering();
	}

    function changeView() {
		if (innerWidth <= 812 && currentView != 'listWeek') {
			calendar.changeView('listWeek')
			currentView = 'listWeek'
		}
        if (innerWidth > 812 && currentView != 'dayGridMonth') {
			calendar.changeView('dayGridMonth')
			currentView = 'dayGridMonth'
		}
    }
</script>

<svelte:window bind:innerWidth on:resize={changeView} />
<div bind:this={calendarEl} class={classes} {style} />

<style>
	:global(.fc-toolbar-chunk) {
		margin: 10px;
	}
	:global(.fc-listWeek-view) {
		display: contents;
	}
	@media(max-width: 812px) {
		:global(.fc-header-toolbar) {
			flex-wrap: wrap;
		}
		:global(.fc-toolbar-chunk) {
			width: 100%;
			text-align: center;
			display: inline-flex;
			justify-content: space-between;
		}
		:global(.fc .fc-toolbar-title) {
			margin: 0 auto;
		}
	}
</style>
