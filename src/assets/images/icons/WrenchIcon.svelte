<script lang="ts">
	let props = $props();

	let stroke = props.stroke;

	props = { ...props };
	props.stroke = undefined;
</script>

<svg {...props} fill={stroke} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
	<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
	<g id="SVGRepo_iconCarrier">
		<path
			d="M30.295 8.475l-6.571 6.571-5.617-1.495-1.494-5.617 6.571-6.571c-3.298-0.851-6.953-0.005-9.534 2.577-2.737 2.737-3.544 6.678-2.422 10.126l-10.165 10.165v6.487h6.268l10.28-10.28c3.443 1.114 7.376 0.305 10.108-2.428 2.584-2.584 3.433-6.233 2.577-9.534z"
		></path>
	</g>
</svg>
