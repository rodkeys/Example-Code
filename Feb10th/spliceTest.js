let names = [
    "bob",
    "sally",
    "tim",
    "jen",
    "jim",
    "timmy"
]

// This will return 3 (position of jen in the array)
names.indexOf("jen")

// index, # to remove
// This will remove jen from the array
names.splice(names.indexOf("jen"), 1)