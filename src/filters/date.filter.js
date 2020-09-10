export default function dateFilter(value, format = 'month') {
    const options = {}

    if (format.includes('date')) {
        options.month = 'short'
        options.year = 'numeric'
      }
    
    
      if (format.includes('month')) {
        options.month = 'short'
      }
    return Intl.DateTimeFormat('en-US', options).format(new Date(value))
}