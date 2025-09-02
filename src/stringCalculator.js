let addCalledCount = 0;

function add(input) {
    addCalledCount++;

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

    // delimiters format //[d1][d2]...\\n<numbers>
    let delimiters = [defaultDelim, "\n"];
    if (defaultDelim.startsWith("[")) {
        delimiters = [];
        let temp = "";
        let inside = false;
        for (let ch of defaultDelim) {
            if (ch === "[") {
                inside = true;
                temp = "";
            } else if (ch === "]") {
                inside = false;
                delimiters.push(temp);
            } else if (inside) {
                temp += ch;
            }
        }
        delimiters.push("\n");
    }

    // replace all delimiters with a comma
    for (const d of delimiters) {
        if (d === "") continue;
        body = body.split(d).join(",");
    }

    const parts = body.split(",").filter((s) => s !== "");
    const nums = parts.map((t) => Number(t));

    //handle negative numbers
    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.filter((n) => n <= 1000).reduce((acc, n) => acc + (Number.isNaN(n) ? 0 : n), 0);
}


function getCalledCount() {
    return addCalledCount;
}

module.exports = { add, getCalledCount };