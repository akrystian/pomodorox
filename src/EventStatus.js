class EventStatus {
    static START = new EventStatus('start')
    static END = new EventStatus('end')
    static POINT = new EventStatus('point')

    constructor(name) {
        this.name = name
    }
}

export default EventStatus
