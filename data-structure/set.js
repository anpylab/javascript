/**
set implementation
*/
function setDS() {
    let arr = []; // Linked List
    let random = 0;

    _isDuplicate = function (ele) {
        if (arr.length > 0 && arr.indexOf(ele) != -1) {
            return true;
        } else {
            return false;
        }
    }
    _addEle = function (ele) {
        if (!_isDuplicate(ele)) {
            arr.push(ele);
        } else {
            new Error("Duplicate is not Allowed");
        }
    }
    _remvoeEle = function (ele) {
        if (arr.length > 0) {
            arr = arr.filter(function (arrEle) {
                return arrEle != ele;
            });
        } else {
            console.log("Set is empty and no element to remove.")
        }
    }
    _getRandomEle = function () {
        randon = Math.random(arr.length);
        if (arr.length > 0 && randon < arr.length) {
            return arr[randon];

        }
    }
    return {
        add: _addEle,
        remove: _remvoeEle,
        getRandomEle: _getRandomEle
    }
}

let ds = setDS();
ds.add(1);
ds.add(3);
ds.add(6);