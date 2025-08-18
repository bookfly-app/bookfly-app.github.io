<script lang="ts">
  import favicon from '../assets/images/favicon.png';

  let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
