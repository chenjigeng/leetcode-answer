function getClosestNumber(value, interval, isFloor) {
    let closestNumber = 0;

    while (true) {
        if (value > closestNumber) {
            if (value > closestNumber && value <= closestNumber + interval) {
                if (value - closestNumber < closestNumber + interval - value) {
                    return closestNumber;
                } else {
                    return closestNumber + interval;
                }
            } else {
                closestNumber += interval;
            }
        } else if (value < closestNumber) {
            if (value < closestNumber && value >= closestNumber - interval) {
                if (
                    closestNumber - value <
                    value - (closestNumber - interval)
                ) {
                    return closestNumber;
                } else {
                    return closestNumber - interval;
                }
            } else {
                closestNumber -= interval;
            }
        } else {
            return closestNumber;
        }
    }
}

function getClosestFloorNumber(value, interval) {
    const num = getClosestNumber(value, interval);

    if (num > value) {
        return num - interval;
    }

    return num;
}

console.log(getClosestFloorNumber(-0.22, 0.1));
console.log(getClosestFloorNumber(-0.3, 0.1));
console.log(getClosestFloorNumber(0.61, 0.1));
