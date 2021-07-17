const PROMISE_STATUS = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2,
};

class Promise {
  constructor(fn) {
    this.status = this.value = undefined;
    this.reason = undefined;
    this.pendingResolveCBs = [];
    this.pendingRejectCBs = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.status !== PROMISE_STATUS.PENDING) {
      return;
    }

    this.status = PROMISE_STATUS.RESOLVED;
    this.value = value;
    setTimeout(() => {
      this.pendingResolveCBs.map((cb) => cb(value));
    });
  }

  reject(reason) {
    if (this.status !== PROMISE_STATUS.PENDING) {
      return;
    }

    this.status = PROMISE_STATUS.REJECTED;
    this.reason = reason;
    setTimeout(() => {
      this.pendingRejectCBs.map((cb) => cb(value));
    });
  }

  then(resolveCb, rejectCb) {
    return new Promise();
  }
}

const a = new Promise((resolve, reject) => {
  resolve();
});

a.then((value) => {
  return value;
});

a.then(() => {});
