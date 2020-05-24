/**
 * Hash Table
 * @param {HashTable} size 
 */
function HashTable(size) {
    let capacity = size || 16;
    let list = [];

    function _put(key, value) {
        list[key] = value;
    }

    function _get(key) {
        console.log(list)
        let val = list[key] ? list[key] : null;
        return val;
    }
    return {
        put: _put,
        get: _get
    };
}

let hashTable = new HashTable();
hashTable.put('one', 1);
hashTable.put('two', 2);
console.log(hashTable.get('one'));