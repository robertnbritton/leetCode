/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
*/

var findUnsortedSubarray = function(nums) {
    let copy = nums.slice('')
    let sorted = copy.sort((a, b) => a - b)
    let indexs = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) {
            indexs[i] = '';
        }
    }
    let indexArr = Object.keys(indexs)
    if (indexArr.length===0) {
        return 0
    }
    let first = Number.parseInt(indexArr[0]);
    let last = Number.parseInt(indexArr[indexArr.length - 1])
    
    let len = last - first + 1
    return len
};

let test = () => {
    console.log(findUnsortedSubarray([1,2,3,4]))
}
test()