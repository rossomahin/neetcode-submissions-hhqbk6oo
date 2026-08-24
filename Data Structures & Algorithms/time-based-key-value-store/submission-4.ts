class TimeMap {
    keyStore: Map<string, [string, number][]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key);
        if (!values) return "";

        let left = 0, right = values.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (values[mid][1] === timestamp) {
                return values[mid][0]
            } else if (values[mid][1] < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return right >= 0 ? values[right][0] : "";
    }
}
