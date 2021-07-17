/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path
    .replace(/\/\//gi, "/")
    .split("/")
    .filter((item) => !!item && item !== ".");

  const result = [];

  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "..") {
      result.push(path[i]);
    } else {
      result.pop();
    }
  }

  console.log("path", result);
  if (result.length === 0) {
    return "/";
  }

  return "/" + result.join("/");
};

// path = "/home//foo/";

// simplifyPath(path);

// simplifyPath("/a/./b/../../c/");

// simplifyPath("/../");
