/**
 * A* 算法
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
 */
class PathNode {
    constructor(x, y, targetX, targetY, currentCost, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.targetX = targetX;
        this.targetY = targetY;
        this.expectedTargetCost = Math.max(Math.abs(this.targetX - this.x), Math.abs(this.targetY - this.y)) + currentCost;
        this.currentCost = currentCost;
    }

    updateNode(cost, parent) {
        this.currentCost = cost;
        this.parent = parent;
    }

    getExpectedTargetCost() {
        this.expectedTargetCost =  Math.max(Math.abs(this.targetX - this.x), Math.abs(this.targetY - this.y)) + this.currentCost;
        return this.expectedTargetCost;
    }
}

/**
 * 
 * @param {PathNode[]} nodes 
 */
function getExpectedMinCostNode(nodes) {
    if (nodes.length === 0) return null;
    let expectedNode = nodes[0];
    for (let i = 1; i < nodes.length; i++) {
        if (nodes[i].getExpectedTargetCost() < expectedNode.getExpectedTargetCost()) {
            expectedNode = nodes[i];
        }
    }

    return expectedNode;
}

// 八个方向
const directions = [
    [[-1, -1], [0, -1], [1, -1]],
    [[-1, 0], [0, 0], [1, 0]],
    [[-1, 1], [0, 1], [1, 1]],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    if (grid[0][0] === 1) return -1;

    const targetX = grid[0].length - 1, targetY = grid.length - 1;

    if (grid[targetY][targetX] === 1) return -1;

    if (grid.length <= 2) return grid.length;

    const pendingVisitedNodes = [];

    pendingVisitedNodes.push(new PathNode(0, 0, targetX, targetY, 1, null));

    while (pendingVisitedNodes.length > 0) {
        const node = getExpectedMinCostNode(pendingVisitedNodes);
        pendingVisitedNodes.splice(pendingVisitedNodes.indexOf(node), 1);
        if (grid[node.y][node.x] === 1) {
            continue;
        }
        grid[node.y][node.x] = 1;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const nextX = node.x + directions[i][j][0];
                const nextY = node.y + directions[i][j][1];

                if (nextX >= 0 && nextX <= targetX && nextY >= 0 && nextY <= targetY && grid[nextY][nextX] !== 1) {
                    const nextCurrentCost = node.currentCost + 1;
                    if (nextX === targetX && nextY === targetY) {
                        console.log(pendingVisitedNodes.length);
                        return nextCurrentCost;
                    }
            
                    pendingVisitedNodes.push(
                        new PathNode(nextX, nextY, targetX, targetY, nextCurrentCost, node)
                    );
                }
            }
        }
    }

    return -1;
};

// console.log(shortestPathBinaryMatrix(
//     [
//         [0, 0, 0, 0, 1, 1, 1, 1, 0],
//         [0, 1, 1, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 0, 0, 0, 0, 0, 0],
//         [1, 1, 0, 0, 1, 0, 0, 1, 1], 
//         [0, 0, 1, 1, 1, 0, 1, 0, 1], 
//         [0, 1, 0, 1, 0, 0, 0, 0, 0], 
//         [0, 0, 0, 1, 0, 1, 0, 0, 0], 
//         [0, 1, 0, 1, 1, 0, 0, 0, 0], 
//         [0, 0, 0, 0, 0, 1, 0, 1, 0]
//     ]));

