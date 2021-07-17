class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(cb);
  }

  off(eventName, cb) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] = this.events[eventName].filter(
      (eventCb) => eventCb !== cb
    );
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].map((cb) => {
        cb(...args);
      });
    }
  }
}

class Observer {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.map((item) => item());
  }
}
