<script lang="ts">
	let props = $props();

	let stroke = props.stroke;

	props = { ...props };
	props.stroke = undefined;
</script>

<svg
	viewBox="0 0 24 24"
	id="Layer_1"
	data-name="Layer 1"
	xmlns="http://www.w3.org/2000/svg"
	fill={stroke}
	{...props}
	><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
		id="SVGRepo_tracerCarrier"
		stroke-linecap="round"
		stroke-linejoin="round"
	></g><g id="SVGRepo_iconCarrier"
		><defs
			><style>
				.cls-1 {
					fill: none;
					stroke-miterlimit: 10;
					stroke-width: 1.91px;
				}
			</style></defs
		><path
			class="cls-1"
			style:stroke
			d="M1.5,18.68H8.18A3.82,3.82,0,0,1,12,22.5v0a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V18.68A0,0,0,0,1,1.5,18.68Z"
		></path><path
			class="cls-1"
			style:stroke
			d="M15.82,18.68H22.5a0,0,0,0,1,0,0V22.5a0,0,0,0,1,0,0H12a0,0,0,0,1,0,0v0A3.82,3.82,0,0,1,15.82,18.68Z"
		></path><path
			class="cls-1"
			style:stroke
			d="M1.5,6.27H8.18A3.82,3.82,0,0,1,12,10.09V22.5a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V6.27A0,0,0,0,1,1.5,6.27Z"
		></path><path
			class="cls-1"
			style:stroke
			d="M19.64,6.27H22.5V22.5H12V10.09a3.82,3.82,0,0,1,3.82-3.82"
		></path><path
			class="cls-1"
			style:stroke
			d="M19.64,13l-1.91,1.91L15.82,13V3.41A1.9,1.9,0,0,1,17.73,1.5h0a1.91,1.91,0,0,1,1.91,1.91Z"
		></path></g
	></svg
>
