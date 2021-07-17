let urls = ["https://*.qq.com"];
function isValidDomain(url, allowPort) {
  return !!urls.find((item) => {
    item = item.replace("*", "[a-zA-Z0-9.]*");

    if (allowPort) {
      item = item + "(:\\d{1,5})?";
    }

    item += "($|/)";

    console.log("item", item);

    if (new RegExp(`^${item}`, "gi").test(url)) {
      return true;
    }
  });
}

const a = /^[^a-b1-9.xx](a|b|casd|hhh)$/;
console.log(isValidDomain("https://example.com/.qq.com"));
console.log(isValidDomain("https://sub.qq.com"));
console.log(isValidDomain("https://sub1.sub2.qq.com"));
console.log(isValidDomain("https://sub1.sub2.qq.com:8000", true));
console.log(isValidDomain("https://sub1.sub2.qq.com:50001", true));
console.log(isValidDomain("https://www.qq.com"));
console.log(isValidDomain("https://www.qq.coma"));
console.log(isValidDomain("https://www.qq.com/"));
console.log(isValidDomain("https://www.qq.com/path"));

// https://example.com/.qq.com -> false
// https://sub.qq.com -> true
// https://sub1.sub2.qq.com -> true
// https://www.qq.com -> true
// https://www.qq.coma -> false
// https://www.qq.com/ -> true
// https://www.qq.com/path -> true
