class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (arr[m][0] < timestamp) {
                l = m + 1
            } else if (arr[m][0] > timestamp) {
                r = m - 1
            } else {
                if (arr[m][0] === timestamp) return arr[m][1];
            }
        }
        return r >= 0 ? arr[r][1] : "";
    }
}
