function saturdayFun(activity: any = "roller-skate"): string {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity: any = "go to the office"): string {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper: string = "special"): any {
    const inner = function(descriptor: string = "*"): string {
        return `You are ${wrapper}${descriptor}${wrapper}!`;
    }
    return inner;
}