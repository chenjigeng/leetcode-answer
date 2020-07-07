// /**
//  * @param {string} path
//  * @return {string}
//  */
// var simplifyPath = function(path) {
//   path = path.replace(/\/+/g, '/').replace(/(?<!\.)\.\//g, '').replace(/\/\.$/, '');

//   while (path.indexOf('/../') >= 0) {
//     const endIndex = path.indexOf('/../') + 3;
//     const startIndex = path.lastIndexOf('/', path.indexOf('/../') - 1);
//     path = path.slice(0, startIndex) + path.slice(endIndex);
//   }

//   if (path.lastIndexOf('/..') === path.length - 3) {
//     const endIndex = path.lastIndexOf('/..') + 3;
//     const startIndex = path.lastIndexOf('/', path.lastIndexOf('/..') - 1);
//     path = path.slice(0, startIndex) + path.slice(endIndex);
//   }


//   if (path.length === 0) {
//     return '/';
//   } else if (path[path.length - 1] === '/' && path.length > 1) {
//     return path.slice(0, path.length - 1);
//   } else {
//     return path;
//   }

// };

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.split('/').filter(s => s && s !== '.');
  const result = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '..') {
      result.splice(result.length - 1, 1);
    } else {
      result.push(path[i]);
    }
  }

  return '/' + result.join('/');
};

// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/../'));

// console.log(simplifyPath('/a//b////c/d//././/..'));
// console.log(simplifyPath("/..aa/...hidden/"))
// console.log(simplifyPath("/home/of/foo/../../bar/../../is/./here/."));