<script lang="ts">
	import Button from '$ui/button/button.svelte';
	import * as Accordion from '$ui/ui/accordion';
	export let allques = [
		{
			id: 1,
			title: 'Easy',
			content: [
				{
					title: 'Check if Array is Sorted',
					q: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/'
				},
				{
					title: 'Contain Duplicate',
					q: 'https://leetcode.com/problems/contains-duplicate/description/'
				},
				{
					title: 'Missing Number',
					q: 'https://leetcode.com/problems/missing-number/description/'
				},
				{
					title: 'Single Number',
					q: 'https://leetcode.com/problems/single-number/description/'
				}
			]
		},
		{
			id: 2,
			title: 'Medium',
			content: [
				{
					title: 'Top K Frequent Element',
					q: 'https://leetcode.com/problems/top-k-frequent-elements/description/'
				},
				{
					title: `Sort an array of 0's, 1's, 2's`,
					q: 'https://leetcode.com/problems/sort-colors/description/'
				},
				{
					title: 'Maximum Subarray',
					q: 'https://leetcode.com/problems/maximum-subarray/description/'
				},
				{
					title: 'Rotate Array',
					q: 'https://leetcode.com/problems/rotate-array/description/'
				}
			]
		},
		{
			id: 3,
			title: 'Hard',
			content: [
				{
					title: 'Merge intervals',
					q: 'https://leetcode.com/problems/merge-intervals/description/'
				},
				{
					title: 'Subarry sum Equals K',
					q: 'https://leetcode.com/problems/subarray-sum-equals-k/description/'
				},
				{
					title: 'Longest Consecutive Sequence',
					q: 'https://leetcode.com/problems/longest-consecutive-sequence/description/'
				}
			]
		}
	];
</script>

<div class="flex items-center justify-center">
	<Accordion.Root class="w-full sm:max-w-[80%]">
		{#each allques as item}
			<Accordion.Item value="item-{item.id}">
				<Accordion.Trigger>{item.title}</Accordion.Trigger>
				<Accordion.Content class="pl-3 md:pl-5 text-left dark:bg-gray-800/50">
					<ol class="">
						{#each item.content as que}
							<li class="not-prose">
								<Button target="_blank" variant="link" href={que.q}>{que.title}</Button>
							</li>
						{/each}
					</ol>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
