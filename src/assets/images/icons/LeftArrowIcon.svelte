<script lang="ts">
	let props = $props();

	let stroke = props.stroke;

	props = { ...props };
	props.stroke = undefined;
</script>

<svg
	{...props}
	fill={stroke}
	viewBox="0 0 24 24"
	id="left-arrow"
	data-name="Flat Color"
	xmlns="http://www.w3.org/2000/svg"
	class="icon flat-color"
	><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
		id="SVGRepo_tracerCarrier"
		stroke-linecap="round"
		stroke-linejoin="round"
	></g><g id="SVGRepo_iconCarrier"
		><path
			id="primary"
			d="M21,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
			style="fill: {stroke};"
		></path></g
	></svg
>
