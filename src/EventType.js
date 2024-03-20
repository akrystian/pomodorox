class EventType {
    static REGULAR = new EventType('REGULAR')
    static SHORT_BREAK = new EventType('SHORT_BREAK')
    static LONG_BREAK = new EventType('LONG_BREAK')
    static TEST_BREAK = new EventType('TEST_BREAK')
    static OVERDUE = new EventType('OVERDUE')
    static PAUSE = new EventType('PAUSE')

    constructor(type) {
        this.type = type
    }

    toString() {
        return this.type;
    }
}

export default EventType
