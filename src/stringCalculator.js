function add(input) {
    //For empty string input
    if (input === "") return 0;

    let body = input;
    let defaultDelim = ",";

    // dlimmeter format: //<delimiter>\n<numbers>
    if (body.startsWith("//")) {
        const newLine_index = body.indexOf("\n");
        if (newLine_index === -1) throw new Error("invalid input given");
        const customDelimiter = body.slice(2, newLine_index);
        if (!customDelimiter) throw new Error("invalid delimiter");
        defaultDelim = customDelimiter;
        body = body.slice(newLine_index + 1);
    }

    const flat = body.replace(new RegExp(`[${defaultDelim}\n]`, "g"), ",");
    const parts = flat.split(",").filter((s) => s !== "");
    const nums = parts.map((t) => Number(t));

    //handle negative numbers
    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((acc, n) => acc + (Number.isNaN(n) ? 0 : n), 0);
}

module.exports = { add };