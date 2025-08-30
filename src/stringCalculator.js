function add(input) {
    //For empty string input
    if (input === "") return 0;

    //For single number in input
    if (!input.includes(",")) {
        const n = Number(input);
        return Number.isNaN(n) ? 0 : n;
    }

    //For two numbers in input
    const [a, b] = input.split(",");
    const n1 = Number(a);
    const n2 = Number(b);
    return (Number.isNaN(n1) ? 0 : n1) + (Number.isNaN(n2) ? 0 : n2);

}

module.exports = { add };