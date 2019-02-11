let names = [
    "bob",
    "sally",
    "tim",
    "jen",
    "jim",
    "timmy"
]

// This will loop through the names array and
// on conditional met, it will remove jen from the names array
for (let i = 0; i < names.length; i++) {
    if (names[i] == "jen") {
        names.splice(i, 1);
    }
}