<script>
	import StackPlay from '$lib/learnings/set/StackPlay.svelte';
	import Codecopy from '$lib/learnings/vector/Codecopy.svelte';
	import AllQuestion from '$lib/learnings/vector/allQuestion.svelte';
	let allcodes = [
		{
			name: 'Simple Push and Pop in Stack',
			code: `
    stack<int> s;
	// Push Operations 
    s.push(10);  
    s.push(40);  
    s.push(20);  
    // Pop Operation
    s.pop(); 
	// Print Values in Stack : 
    while (!s.empty()) {
        cout << s.top() <<" ";
        s.pop();
    }
	// Output : 40 10
`
		},
		{
			name: 'Empty and Size in Stack',
			code: `	stack<int> s;
	// Push Operations 
	s.push(10);  
	s.push(40);  
	s.push(20); 

	if(s.empty()){
		cout<<"Empty Stack";
	}
	else{
		cout<<"Size = "<<s.size()<<" "; // Size of Stack
	}
	// Output : Size = 3
			`
		}
	];
	let allques = [
		{
			id: 1,
			title: 'Easy & Medium Stack Questions',
			content: [
				{
					title: 'Backspace String Compare',
					q: 'https://leetcode.com/problems/backspace-string-compare/description/'
				},
				{
					title: 'Make The String Great',
					q: 'https://leetcode.com/problems/make-the-string-great/description/'
				},
				{
					title: 'Valid Parentheses',
					q: 'https://leetcode.com/problems/valid-parentheses/'
				},
				{
					title: 'Removing Stars From a String',
					q: 'https://leetcode.com/problems/removing-stars-from-a-string/description/'
				},
				{
					title: 'Beautiful Towers I',
					q: 'https://leetcode.com/problems/beautiful-towers-i/description/'
				},

				{
					title: 'Next Greater Element I',
					q: 'https://leetcode.com/problems/next-greater-element-i/description/'
				},
				{
					title: 'Daily Temperatures',
					q: 'https://leetcode.com/problems/daily-temperatures/description/'
				},
				{
					title: 'Remove Duplicate Letters',
					q: 'https://leetcode.com/problems/remove-duplicate-letters/description/'
				}
			]
		},
		{
			id: 2,
			title: 'Hard Stack Questions',
			content: [
				{
					title: 'Largest Rectangle in Histogram',
					q: 'https://leetcode.com/problems/largest-rectangle-in-histogram/description/'
				},
				{
					title: 'Trapping Rain Water',
					q: 'https://leetcode.com/problems/trapping-rain-water/'
				},
				{
					title: 'Longest Valid Parentheses',
					q: 'https://leetcode.com/problems/longest-valid-parentheses/'
				},
				{
					title: 'Number of Visible People in a Queue',
					q: 'https://leetcode.com/problems/number-of-visible-people-in-a-queue/description/'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Stack in C++</title>
	<meta property="og:title" content="Stack in C++" />
	<meta property="description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:url" content="https://roadmap-flow.vercel.app" />
	<meta
		property="og:image"
		content="https://i.pinimg.com/736x/9e/be/8d/9ebe8db903a77a0a1fa5d2c575686f4e.jpg"
	/>
</svelte:head>
<div class="">
	<h1>Stack in C++</h1>
	<ol class="text-left">
		<li>
			Stacks are a type of container adaptor, specifically designed to operate in a LIFO context
			(last-in first-out). New element is added at one end (top) and an element is removed from that
			end only.
		</li>
	</ol>
	<div class="flex justify-center not-prose">
		<StackPlay />
	</div>
	<div>
		<h2>Code</h2>
		<ol>
			<div class="not-prose">
				<Codecopy {allcodes} />
			</div>
		</ol>
	</div>
	<div class="mt-10">
		<h3>Solve Questions</h3>
		<AllQuestion {allques} />
	</div>
</div>
