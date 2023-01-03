// add whatever parameters you deem necessary
function countPairs(arr, target) {

    let nums = {};
    let count = 0;
    arr.forEach(num => {

        if (nums[num]) {

            count++;
        } else {
            nums[target - num] = num;
        }

    })






    return count;
}

