<script>
	import SetPlay from '$lib/learnings/set/SetPlay.svelte';
	import Codecopy from '$lib/learnings/vector/Codecopy.svelte';
	import AllQuestion from '$lib/learnings/vector/allQuestion.svelte';
	let allcodes = [
		{
			name: 'Initializing a Set',
			code: `set<int>v{ 1,2,3,4,5}; \nset<int>p; \n p.insert(10); \n p.insert(50); \n p.insert(40); \n for(auto i:v) { \n    cout<< i <<" ";\n }\n //Another way of Printing all Elements  \n for (auto it = p.begin(); it != p.end(); ++it) { \n     cout << ' ' << *it;  \n }\n // Output \n // 1 2 3 4 5 \n // 10 40 50`
		},
		{
			name: 'Inset an Element in Set',
			code: `set<int>c; \nfor (int i=1; i<=5; ++i) c.insert(i*10);  // set: 10 20 30 40 50 
int nums[]= {5,10,15};              // 10 already in set, not inserted
myset.insert (nums,nums+3); \n //Output : 5 10 15 20 30 40 50`
		},
		{
			name: 'Erase Elements in Set',
			code: `// erasing from set
#include <iostream>
#include <set>

int main ()
{
  std::set<int> myset;
  std::set<int>::iterator it;

  // insert some values:
  for (int i=1; i<10; i++) myset.insert(i*10);  // 10 20 30 40 50 60 70 80 90

  it = myset.begin();
  ++it;                                         // "it" points now to 20

  myset.erase (it);

  myset.erase (40);

  it = myset.find (60);
  myset.erase (it, myset.end());

  std::cout << "myset contains:";
  for (it=myset.begin(); it!=myset.end(); ++it){
    std::cout << ' ' << *it;
  }
  std::cout <<endl;

  return 0;
  // Output : myset contains: 10 30 50
}`
		},
		{
			name: 'Swap in Set',
			code: `
  int myints[]={12,75,10,32,20,25};
  set<int> first (myints,myints+3);     // 10,12,75
  set<int> second (myints+3,myints+6);  // 20,25,32
  first.swap(second);                   // Important part
  cout << "first contains:";
  for (set<int> it=first.begin(); it!=first.end(); ++it){
    cout << ' ' << *it;
  }
  cout<<endl;
  cout << "second contains:";
  for (set<int> it=second.begin(); it!=second.end(); ++it){
    cout << ' ' << *it;
  }
  
`
		},
		{
			name: 'Clear Elements',
			code: `set<int>v={10,20,30};\nv.clear(); \n//Output :  no element present\nv.insert(50);\n//Output: 50`
		}
	];
</script>

<div class="">
	<h1>Set in C++</h1>
	<ol class="text-left">
		<li>
			Sets are containers that store unique elements following a specific order. The values are
			stored in a specific sorted order i.e. either ascending or descending.
		</li>
		<li>
			The value of the element cannot be modified once it is added to the set, though it is possible
			to remove and add the modified value of that element.
		</li>
	</ol>
	<div class="flex justify-center not-prose">
		<SetPlay />
	</div>
	<div>
		<h2>Code</h2>
		<ol>
			<Codecopy {allcodes} />
		</ol>
	</div>
	<div class="mt-10">
		<h3>Solve Questions</h3>
		<AllQuestion />
	</div>
</div>
