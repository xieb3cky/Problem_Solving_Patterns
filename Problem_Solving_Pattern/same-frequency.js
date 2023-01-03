// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let int1Map = {};

    let int2Map = {};


    for (i of String(int1)) {
        let count = int1Map[i] || 0;
        int1Map[i] = count + 1;
    }

    for (i of String(int2)) {
        let count = int2Map[i] || 0;
        int2Map[i] = count + 1;
    }


    const keys = Object.keys(int1Map);



    for (let k of keys) {
        if (k in int2Map) {
            if (int1Map[k] !== int2Map[k]) return false;
        } else {
            return false;
        }
    }
    return true;

}
