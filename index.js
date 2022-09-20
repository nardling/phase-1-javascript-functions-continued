function saturdayFun(activity) {
    if (activity === void 0) { activity = "roller-skate"; }
    return "This Saturday, I want to ".concat(activity, "!");
}
function mondayWork(activity) {
    if (activity === void 0) { activity = "go to the office"; }
    return "This Monday, I will ".concat(activity, ".");
}
function wrapAdjective(wrapper) {
    if (wrapper === void 0) { wrapper = "special"; }
    var inner = function (descriptor) {
        if (descriptor === void 0) { descriptor = "*"; }
        return "You are ".concat(wrapper).concat(descriptor).concat(wrapper, "!");
    };
    return inner;
}
