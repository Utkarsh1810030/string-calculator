function add(input) {
    //For empty string input
    if (input === "") return 0;

    //For n number of comma-separated input string along with delimmeters as new line
    const formatted = input.replace(/\n/g, ",");
    const parts = formatted.split(",").filter((s) => s !== "");
    const values = parts.map((t) => Number(t));

    return values.reduce((acc, n) => acc + (Number.isNaN(n) ? 0 : n), 0);
}

module.exports = { add };