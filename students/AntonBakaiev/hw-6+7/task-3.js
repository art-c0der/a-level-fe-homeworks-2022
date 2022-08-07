const numberDays = [3, 4, 5, 1, 6, 2, 7]

let weekDays = numberDays.map(numberDaysItem => {
    const nameDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return nameDay[numberDaysItem-1]
})

console.log(weekDays)

