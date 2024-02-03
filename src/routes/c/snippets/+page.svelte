<script lang="ts">
	import Codecopy from '$lib/learnings/vector/Codecopy.svelte';
	import { Settings } from 'lucide-svelte';

	let codeSnippet = `
    {
	"CodeForces & Codechef Snippet": {
		"scope": "cpp",
		"prefix": "code",
		"body": [
			"#include <bits/stdc++.h>",
			"using namespace std;",
			"/* TYPES  */",
			"#define ll long long",
			"#define pii pair<int, int>",
			"#define pll pair<long long, long long>",
			"#define vi vector<int>",
			"#define vll vector<long long>",
			"#define mii map<int, int>",
			"#define si set<int>",
			"#define sc set<char>",
			"/* FUNCTIONS */",
			"#define f(i,s,e) for(long long int i=s;i<e;i++)",
			"#define cf(i,s,e) for(long long int i=s;i<=e;i++)",
			"#define rf(i,e,s) for(long long int i=e-1;i>=s;i--)",
			"#define pb push_back",
			"#define eb emplace_back",
			"/* UTILS */",
			"#define MOD 1000000007",
			"#define PI 3.1415926535897932384626433832795",
			"#define read(type) readInt<type>()",
			"ll min(ll a,int b) { if (a<b) return a; return b; }",
			"ll min(int a,ll b) { if (a<b) return a; return b; }",
			"ll max(ll a,int b) { if (a>b) return a; return b; }",
			"ll max(int a,ll b) { if (a>b) return a; return b; }",
			"ll gcd(ll a,ll b) { if (b==0) return a; return gcd(b, a%b); }",
			"ll lcm(ll a,ll b) { return a/gcd(a,b)*b; }",
			"string to_upper(string a) { for (int i=0;i<(int)a.size();++i) if (a[i]>='a' && a[i]<='z') a[i]-='a'-'A'; return a; }",
			"string to_lower(string a) { for (int i=0;i<(int)a.size();++i) if (a[i]>='A' && a[i]<='Z') a[i]+='a'-'A'; return a; }",
			"bool prime(ll a) { if (a==1) return 0; for (int i=2;i<=round(sqrt(a));++i) if (a%i==0) return 0; return 1; }",
			"void yes() { cout<<\"YES\"; }",
			"void no() { cout<<\"NO\"; }",
			"int main()",
			"{",
			"    int t;",
			"    cin>>t;",
			"    while(t--)",
			"    {",
			"        $1",
			"    }",
			"    return 0;",
			"}"
		],
		"description": "Codeforces & Codechef Snippet File"
	},
	"Simple Code": {
		"scope": "cpp",
		"prefix": "simple",
		"body": [
			"#include <bits/stdc++.h>",
			"using namespace std;",
			"int main()",
			"{",
			"    $1",
			"    return 0;",
			"}"
		],
		"description": "Simple code"
	},
	"Snippet for Leetcode": {
		"scope": "cpp",
		"prefix": "leetcode",
		"body": [
			"#include <bits/stdc++.h>",
			"using namespace std;",
			"struct ListNode",
			"{",
			"	int val;",
			"	ListNode *next;",
			"	ListNode() : val(0), next(nullptr) {}",
			"	ListNode(int x) : val(x), next(nullptr) {}",
			"	ListNode(int x, ListNode *next) : val(x), next(next) {}",
			"};",
			"",
			"// Write Your Function here..have a Nice day",
			"",
			"$1",
			"int main()",
			"{",
			"    return 0;",
			"}"
		],
		"description": "LeetCode Snippet"
	},
}`;
	let allcodes = [
		{
			name: 'Copy Snippet  Code ->',
			code: codeSnippet
		}
	];
</script>

<div>
	<h1>C++ Snippets</h1>
	<ol class="text-left">
		<li>
			C++ Snippets offer a convenient way to compose more extensive sections of code in just 3-4
			letters, significantly enhancing your productivity."
		</li>
		<li>
			Incorporating these snippets into your workflow has proven to be effective, especially when
			tackling challenges on platforms like LeetCode and Codeforces, or for straightforward
			problem-solving scenarios.
		</li>
	</ol>
	<h4>Steps to build a Snippet</h4>
	<ol class="text-left">
		<li>Go to VS Code Editor</li>
		<li>
			Click on <span class="text-primary/90 inline-flex px-1 items-center"
				>Settings <Settings size="18" class="ml-1.5" /></span
			> Icon
		</li>
		<li>Click on user snippets</li>
		<li>
			Click on <span class="text-primary dark:bg-sky-800/40 px-1">New Global Snippets File</span>
		</li>
		<li>Copy and Paste the Below Code</li>
		<li>
			Save the File. Now Create <span class="font-mono px-1 bg-sky-800/40">code.cpp</span> file and
			type
			<span class="font-mono bg-sky-800/40 px-1.5">leet... / code / smiple</span> to check the code and
			press enter.
		</li>
		<li>You will see Your Snippet and you are ready to go</li>
	</ol>
	<!-- <pre>
        <code>
            {codeSnippet}
        </code>
    </pre> -->
	<ol>
		<div class="not-prose">
			<Codecopy {allcodes} lang="json" />
		</div>
	</ol>
</div>
