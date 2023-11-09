<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tbody class={cn('[&_tr:last-child]:border-0 overflow-auto', className)} {...$$restProps}>
	<slot />
</tbody>

