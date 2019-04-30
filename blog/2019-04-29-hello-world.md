---
title: Hello world
---

Welcome to my blog. This blog is created with [**Docusaurus 2 alpha**](https://docusaurus-2.netlify.com/).

<!--truncate-->

The overall look of the website is inspired from https://overreacted.io/.

Just for the sake of testing syntax highlighting. Let's solve https://codeforces.com/problemset/problem/486/C.

Here is my solution:

```cpp
#include <cstdio>
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 100*1000 + 9;
char s[N];

int main() {
    int n, p;
    scanf("%d %d", &n, &p);
    p--;
    scanf("%s", s);
    if (p >= n / 2)
        p = n - 1 - p;
    int l = 0, r = n / 2 - 1;
    while (l < n / 2 && s[l] == s[n - 1 - l])
        l++;
    while (r >= 0 && s[r] == s[n - 1 - r])
        r--;
    int ans = 0;
    int ch = 0;
    for (int i = l; i <= r; i++) {
        int diff = abs(s[i] - s[n - 1 - i]);
        ch += min(diff, 'z' - 'a' + 1 - diff);
    }
    if (l < r)
        ans += min(abs(p - l), abs(p - r)) + abs(r - l) + ch;
    else if (ch > 0)
        ans += abs(p-l) + ch;
    printf("%d\n", ans);
    return 0;
}
```
