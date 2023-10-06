/**
 Write a functionthat accepts a string s, returns the length of the longest substring without repeating characters.
 
 Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
    Input: s = 'alrightalright'
    Output: 7
    Explanation: The answer is 'alright', with the length of 7.

----------------------------------------------------------------------------------------------    
@Leetcode link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
----------------------------------------------------------------------------------------------


*/


function lengthOfLongestSubstring(s) {
    let substring = '';
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const index = substring.indexOf(s[i]);
        if (index > -1) {
            substring = substring.substring(index + 1);
        }
        substring += s[i];
        max = Math.max(max, substring.length);
    }

    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('alrightalright')); // 7