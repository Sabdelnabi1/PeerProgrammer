const balance = (str) => {
    const array = []; const open = { "{": "}", "[": "]", "(": ")", }; const closed = { "}": true, "]": true, ")": true, }; for (let i = 0; i < str.length; i++) {
        let check = str[i];
        if (open[check]) { array.push(check); } else if (closed[check]) { if (open[array.pop()] !== check) { return false; } }
    } return array.length === 0;
}; console.log(balance("{hello}"))