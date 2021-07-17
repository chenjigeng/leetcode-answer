function sendRequest(urls: string[],max:number,callback:()=>void) {
  let currentRuningTasksCount = 0;

  const send = async (url: string) => {
    if (currentRuningTasksCount < max) {
      currentRuningTasksCount++;
    } else {
      return;
    }
    await fetch(url);
    currentRuningTasksCount--;
    if (urls.length > 0) {
      send(urls.shift());
    } else if (currentRuningTasksCount === 0) {
      callback();
    }
  }

  while (currentRuningTasksCount < max && urls.length > 0) {
    send(urls.shift());
  }
}