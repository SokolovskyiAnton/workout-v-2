export default function dateFilter(value) {
    const options = {
        month: 'long', 
        year: 'numeric'
    }
    return Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}