class EventStatus {
    static STARTED = new EventStatus("started");
    static ENDED = new EventStatus("ended");
    static POINT = new EventStatus("point");

    constructor(status) {
//        if (["started", "ended", "point"].includes(status) !== false) {
//            console.log("Invalid status " + status + "!")
//            throw "Invalid status " + status + "!"
//        }
        this.status = status;
    }

    toString() {
        return this.status;
    }
}

export default EventStatus

