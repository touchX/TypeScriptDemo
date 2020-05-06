var Week;
(function (Week) {
    Week[Week["Sunday"] = 0] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
})(Week || (Week = {}));
(function (Week) {
    function getDay(day) {
        if (day == Week.Sunday) {
            console.info(0);
        }
        else if (day == Week.Monday) {
            console.info(1);
        }
    }
    Week.getDay = getDay;
})(Week || (Week = {}));
