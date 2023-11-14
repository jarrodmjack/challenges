// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/submissions/1098375722/

var maximumTripletValue = function(nums) {

    let prevHighest = -1

    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                if (i < j && j < k) {
                    const currVal = (nums[i] - nums[j]) * nums[k]
                    if (currVal >= prevHighest) {
                        prevHighest = currVal
                    }

                }
            }
        }
    }

    if (prevHighest < 0) {
        return 0
    }

    return prevHighest
    
};
