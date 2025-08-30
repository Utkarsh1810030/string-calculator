function add(input) {
    //For empty string input
    if (input === "") return 0;

    //For n number of comma-separated input string
    const parts = input.split(",");
    const values = parts.map((t) => Number(t));
    return values.reduce((acc, n) => acc + (Number.isNaN(n) ? 0 : n), 0);
}

module.exports = { add };