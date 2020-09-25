const createUUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c =='x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

const generateMarkerList = (numOfMarkers) => {
    const markerList = [];
    let counter = 1;
    while (counter <= numOfMarkers) {
        markerList.push(
            {id: createUUID(), value: counter, passes: 0}
        );
        counter++;
    }
    return markerList;
}

// const isKeyInMarkerList = (list, key) => {
//     let isKey = null;
//     list.forEach(el => {
//         if (el.id !== key) {
//             isKey = false;
//         }
//         isKey = true;
//     });
//     return isKey;
// }

const asignedSprints = [2, 4, 1, 3];
const markerList = generateMarkerList(5);
console.log(markerList);

const getAsignedMarkedSprints = (arr) => {
    let asignedMarkedSprints = [];
    arr.forEach(el => {
        asignedMarkedSprints.push(markerList[el-1]);
    });
    return asignedMarkedSprints;
}
const asignedMarkedSprints = getAsignedMarkedSprints(asignedSprints);
console.log(asignedMarkedSprints);

const calculateNumberOfPasses = (markers, markedSprints) => {
    for (let i = 0; i < markedSprints.length - 1; i++) {
        let c = markedSprints[i];
        let n = markedSprints[i+1];
        if (c.value < n.value) {
            for (let j = c.value - 1; j < n.value; j++) {
                markers[j].passes += 1;
            }
        }
        if (c.value > n.value) {
            for (let j = n.value - 1; j < c.value; j++) {
                markers[j].passes += 1;
            }
        }
    }
}
calculateNumberOfPasses(markerList, asignedMarkedSprints);

const getMostVisited = (markers) => {
    let mostVisited = markers[0];
    markers.forEach(marker => {
        if (marker.passes > mostVisited.passes) {
            mostVisited = marker;
        }
    });
    return mostVisited;
}
console.log(getMostVisited(markerList));


// 1. [1,5,8,9,11,14,17,25,64,89]
// - sa se returneze daca exista unnumar in array
// - sa se returneze pozitia  uni numar in array

const array1 = [1,5,8,9,11,14,17,25,64,89];

const isNumberInArray = (arr, num) => {
    return arr.includes(num);
}

const getIndexInSortedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(getIndexInSortedArray(array1, 14));