export class NewLine {
    constructor(label, backgroundColor, data) {
        this.label = label
        this.type = 'line',
        this.backgroundColor = backgroundColor,
        this.borderColor = backgroundColor,
        this.borderWidth = 1,
        this.lineTension = 0.1,
        this.fill = false,
        this.borderCapStyle = 'butt',
        this.borderDash = [],
        this.borderDashOffset = 0.0,
        this.borderJoinStyle = 'miter',
        this.pointBorderColor = backgroundColor,
        this.pointBackgroundColor = "#fff",
        this.pointBorderWidth = 1,
        this.pointRadius = 1,
        this.pointHitRadius = 10
        this.data = data
    }
}