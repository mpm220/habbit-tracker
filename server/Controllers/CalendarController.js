const router = require("express").Router();
const moment = require("moment");
const Event = require("../Models/Event")

router.post("/create-event", async() => {
    const event = Event(req.body);
    await event.save();
    resizeBy.sendStatus(201);
})

router.get("/get-events", async() => {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate() },
        end:{$lte: moment(req.query.end).toDate() },
    });

    res.send(events);
})

module.exports = router