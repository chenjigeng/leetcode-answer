/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const result = ["JFK"];

  return backTracking(tickets, result, tickets.length + 1);
};

/**
 * @param {string[][]} tickets
 * @param {string[]} result
 * @param {number} targetLength
 */
function backTracking(tickets, result, targetLength) {
  if (result.length === targetLength) return result;

  const start = result[result.length - 1];

  const availableTickets = tickets.filter((item) => item[0] === start).sort();

//   console.log(result, availableTickets);

  for (let i = 0; i < availableTickets.length; i++) {
    const current = availableTickets[i][1];
    result.push(current);
    tickets.splice(tickets.indexOf(availableTickets[i]), 1);
    const r = backTracking(tickets, result, targetLength);
    if (r) return r;
    tickets.push(availableTickets[i]);
    result.splice(result.lastIndexOf(current), 1);
  }

  return null;
}

// const tickets = [
//   ["EZE", "TIA"],
//   ["EZE", "HBA"],
//   ["AXA", "TIA"],
//   ["JFK", "AXA"],
//   ["ANU", "JFK"],
//   ["ADL", "ANU"],
//   ["TIA", "AUA"],
//   ["ANU", "AUA"],
//   ["ADL", "EZE"],
//   ["ADL", "EZE"],
//   ["EZE", "ADL"],
//   ["AXA", "EZE"],
//   ["AUA", "AXA"],
//   ["JFK", "AXA"],
//   ["AXA", "AUA"],
//   ["AUA", "ADL"],
//   ["ANU", "EZE"],
//   ["TIA", "ADL"],
//   ["EZE", "ANU"],
//   ["AUA", "ANU"],
// ];

// [
//   "JFK",
//   "AXA",
//   "AUA",
//   "ADL",
//   "ANU",
//   "AUA",
//   "ANU",
//   "EZE",
//   "ADL",
//   "EZE",
//   "ANU",
//   "JFK",
//   "AXA",
//   "EZE",
//   "TIA",
//   "AUA",
//   "AXA",
//   "TIA",
//   "ADL",
//   "EZE",
//   "HBA",
// ];

// console.log(findItinerary(tickets));
