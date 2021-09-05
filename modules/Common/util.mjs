// Contains little helper functions.

// Parses 'new Date()' into 'D.M.YYYY'
export function parse_date(date) {
    const [d, m, y] = [
        date.getDay(), date.getMonth(), date.getFullYear()
    ]
    return d + "." + m + "." + y
}

