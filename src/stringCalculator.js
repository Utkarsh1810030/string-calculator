function add(input) {
    if (input === "") return 0;

    if (!input.includes(",")) {
        const n = Number(input);
        return Number.isNaN(n) ? 0 : n;
    }

    return 0;
}

module.exports = { add };