
// /**
//  * @param {string[]} dictionary
//  * @param {string} sentence
//  * @return {number}
//  */
// var respace = function(dictionary, sentence) {
//     console.log('count', count);
//     return backTracking(dictionary, sentence, {});
// };


// /**
//  * @param {string[]} dictionary
//  * @param {string} sentence
//  * @param {object} cached
//  * @return {number}
//  */
// function backTracking(dictionary, sentence, cached) {
//     count++;
//     if (cached[sentence] !== undefined) return cached[sentence];
//     if (sentence.length === 0) return 0;
//     let minCost = sentence.length;
//     for (let i = 0; i < dictionary.length; i++) {
//         const word = dictionary[i];
//         if (sentence.includes(word) > 0) {
//             const i = sentence.indexOf(word);
//             minCost = Math.min(minCost, backTracking(dictionary, sentence.slice(0, i), cached) + backTracking(dictionary, sentence.slice(i + word.length), cached));
//         }
//     }
//     cached[sentence] = minCost;
//     return minCost
// }


class Tire {
    constructor() {
        this.nodes = {};
        this.isEnd = false;
    }

    /**
     * 
     * @param {string} word 
     */
    insert(word) {
        let root = this;
        for (let i = 0; i < word.length; i++) {
            if (!root.nodes[word[i]]) {
                root.nodes[word[i]] = new Tire();
            }
            root = root.nodes[word[i]];
        }
        root.isEnd = true;
    }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    const dp = [0];
    const tireNode = new Tire();

    for (let i = 0; i < dictionary.length; i++) {
        tireNode.insert(dictionary[i].split('').reverse().join(''));
    }


    for (let i = 1; i <= sentence.length; i++) {
        dp[i] = dp[i - 1] + 1;
        let node = tireNode;
        for (let j = i - 1; j >=0; j--) {
            if (!node.nodes[sentence[j]]) {
                break;
            }

            if (node.nodes[sentence[j]].isEnd) {
                dp[i] = Math.min(dp[i], dp[j]);
            }

            node = node.nodes[sentence[j]];
        }
    }

    return dp[sentence.length];
};
