// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length === 0) return true;
    if (letters.length < message.length) return false;

    let msgMap = {};
    let lttrsMap = {};

    for (let l of message) {
        let lCount = msgMap[l] || 0;
        msgMap[l] = lCount + 1;
    }


    for (let l of letters) {
        let lCount = lttrsMap[l] || 0;
        lttrsMap[l] = lCount + 1;
    }


    for (let letter in msgMap) {
        if (lttrsMap[letter] || 0) {
            if (msgMap[letter] > lttrsMap[letter]) {
                return false
            }
        } else {
            return false;
        }

    }

    return true;


}
