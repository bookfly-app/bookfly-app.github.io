<script lang="ts">
	let props = $props();

	let stroke = props.stroke;

	props = { ...props };
	props.stroke = undefined;
</script>

<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
	<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
	<g id="SVGRepo_iconCarrier">
		<path
			d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z"
			fill={stroke}
		></path>
	</g>
</svg>
