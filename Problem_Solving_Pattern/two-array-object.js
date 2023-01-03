// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let sol = {};

    let one = arr1.length;
    let two = arr2.length;
    let min = Math.min(one, two);
    let i = 0;

    while (i < min) {
        sol[arr1[i]] = arr2[i];
        i++;
    }

    while (i < one) {
        sol[arr1[i]] = null;
        i++;
    }
    return sol;
}
