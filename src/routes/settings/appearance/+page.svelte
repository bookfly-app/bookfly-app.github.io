<script lang="ts">
	import { setTheme } from "../../../api/themes.svelte";
	import { getPreference, setPreference, type Preference } from "../../../api/userapi";
	import BackButton from "../../../components/BackButton.svelte";
	import Page from "../../../components/Page.svelte";
	import RadioInput from "../../../components/RadioInput.svelte";
</script>

<Page class="settings">
	<span class="heading">
		<BackButton style="position: absolute; left: 1rem;" />
		<h1>Appearance</h1>
	</span>

	<label for="dark-mode">
		<span>Dark Mode</span>
		<RadioInput 
			bind:value={
				() => getPreference("darkMode"), 
				(value: any) => {
					setPreference("darkMode", value);
					if (value) setTheme("Catppuccin Mocha");
					else setTheme("Catppuccin Latte");
				}
			} 
			id="preference-dark-mode" 
			size={0.8} 
		/>
	</label>
</Page>

<style>
	h1 {
		font-weight: normal;
		color: var(--text);
		font-size: 1.5rem;
	}

	label {
		display: flex;
		justify-content: space-between;
		padding-left: 2rem;
		padding-right: 2rem;

		span {
			color: var(--subtext-1);
		}

		&:first-of-type {
			margin-top: 5rem;
		}
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
		justify-content: center;
		position: fixed;
		top: 0px;
		background-color: var(--crust);
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		left: 0px;

		h1 {
			color: var(--text);
			font-weight: normal;
			font-size: 1.25rem;
		}
	}
</style>
