<script>
	import Codecopy from '$lib/learnings/vector/Codecopy.svelte';
	import MapPlay from '$lib/learnings/vector/MapPlay.svelte';
	import VectorPlay from '$lib/learnings/vector/VectorPlay.svelte';
	import AllQuestion from '$lib/learnings/vector/allQuestion.svelte';
	let allcodes = [
		{
			name: 'Initializing a Map',
			code: ` map<int,int>a; \nmap<string,int>b; \nmap<int,vector<int>>nums; \n
a.insert({2,4});
a.insert({1,1});

 // another way of inserting into map - Frequency Count 
 vector<int>allnums = {1,2,3,2};
  for(auto it : allnums){
	a[it]++;
  }
  // This will be useful while getting the frequency 
  // Output 
  /*
  	 1 : 2
	 2 : 6
	 3 : 1
  */

 // Inserting into String , Int
 b.insert({"mango",1});
 b.insert({"orange",1});


 for(auto it:b){
	cout<< it->first <<" "<< it->second <<endl;
	// it.first represent KEY & it.second represent VALUE 
 }
 // Output : 
 /*
 	mango : 1
	orange : 1
 */`
		},
		{
			name: 'Find, Erase and Size in Map',
			code: `  map<char,int> mymap;
  map<char,int> it;

  mymap['a']=50;
  mymap['b']=100;
  mymap['c']=150;
  mymap['d']=200;

  it = mymap.find('b');
  if (it != mymap.end()){
    mymap.erase (it);
  }
  for(auto it : mymap){
	cout<< it->first <<" "<< it->second <<endl;
  } 
  cout<<" Size of Map : "<<mymap.size()<<endl;`
		},
		{
			name: 'Erase by Key, Iterator, Range',
			code: `
  map<char,int> mymap;
  map<char,int> it;

  // insert some values:
  mymap['a']=10;
  mymap['b']=20;
  mymap['c']=30;
  mymap['d']=40;
  mymap['e']=50;
  mymap['f']=60;

  it=mymap.find('b');
  mymap.erase (it);                   // erasing by iterator

  mymap.erase ('c');                  // erasing by key

  it=mymap.find ('e');
  mymap.erase ( it, mymap.end() );    // erasing by range

  // show content:
  for (it=mymap.begin(); it!=mymap.end(); ++it){
    cout << it->first << " => " << it->second <<endl;
  }
  `
		}
	];

	let allques = [
		{
			id: 1,
			title: 'Easy',
			content: [
				{
					title: 'Majority Element',
					q: 'https://leetcode.com/problems/majority-element/description/'
				},
				{
					title: 'Valid Anagram',
					q: 'https://leetcode.com/problems/valid-anagram/'
				},
				{
					title: 'Word Pattern',
					q: 'https://leetcode.com/problems/word-pattern/description/'
				},
				{
					title: 'Ransom Note',
					q: 'https://leetcode.com/problems/ransom-note/'
				},
				{
					title: 'First Unique Character in a String',
					q: 'https://leetcode.com/problems/first-unique-character-in-a-string/'
				}
			]
		},
		{
			id: 2,
			title: 'Medium',
			content: [
				{
					title: 'Group Anagrams',
					q: 'https://leetcode.com/problems/group-anagrams/'
				},
				{
					title: `Longest Consecutive Sequence`,
					q: 'https://leetcode.com/problems/longest-consecutive-sequence/description/'
				},
				{
					title: 'Majority Element II',
					q: 'https://leetcode.com/problems/majority-element-ii/'
				},
				{
					title: 'Find All Anagrams in a String',
					q: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/'
				},
				{
					title: 'Find and Replace Pattern',
					q: 'https://leetcode.com/problems/find-and-replace-pattern/'
				}
			]
		},
		{
			id: 3,
			title: 'Higher Medium',
			content: [
				{
					title: 'Fruit Into Baskets',
					q: 'https://leetcode.com/problems/fruit-into-baskets/'
				},
				{
					title: 'Reduce Array Size to The Half',
					q: 'https://leetcode.com/problems/reduce-array-size-to-the-half/'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Map in C++ Codeflow.</title>
	<meta property="og:title" content="Map in C++ Codeflow." />
	<meta property="description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:url" content="https://roadmap-flow.vercel.app" />
	<meta
		property="og:image"
		content="https://i.pinimg.com/736x/9e/be/8d/9ebe8db903a77a0a1fa5d2c575686f4e.jpg"
	/>
</svelte:head>
<div>
	<h1>Map in C++</h1>
	<ol class="text-left">
		<li>
			Maps are associative containers that store elements formed by a combination of a <strong
				>key value</strong
			>
			and a <strong>mapped value</strong>, following a specific order.
		</li>
		<li>
			Each element has a key value and a mapped value. No two mapped values can have the same key
			values.
		</li>
		<li>Map stores <strong> Uniques Key</strong> in <strong>Sorted Manner</strong></li>
	</ol>
	<div class="flex justify-center not-prose">
		<MapPlay />
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
