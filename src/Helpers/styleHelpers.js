import Images from "../assets/images";

export function conditionalImages(category) {
    switch (category) {
        case "Personal":
            return Images.listOfTasks.personal;
        case "Work":
            return Images.listOfTasks.work;
        case "Meeting":
            return Images.listOfTasks.meeting;
        case "Shopping":
            return Images.listOfTasks.shopping;
        case "Party":
            return Images.listOfTasks.party;
        case "Study":
            return Images.listOfTasks.study;
        default:
            break;
    }
}

export function conditionalCircle(category) {
    const style = {
        width: 70, height: 70,
        borderRadius: 50, alignItems: 'center',
        justifyContent: 'center'
    }
    switch (category) {
        case "Personal":
            return {
                ...style,
                backgroundColor: "rgba(255,238,155,0.36)",
            };
        case "Work":
            return {
                ...style,
                backgroundColor: "rgba(181,255,155,0.36)",
            };
        case "Meeting":
            return {
                ...style,
                backgroundColor: "rgba(255,155,205,0.36)"
            };
        case "Shopping":
            return {
                ...style,
                backgroundColor: "rgba(255,208,155,0.36)"
            };
        case "Party":
            return {
                ...style,
                backgroundColor: "rgba(155,255,248,0.36)",
            };
        case "Study":
            return {
                ...style,
                backgroundColor: "rgba(245,155,255,0.36)"
            };
        default:
            break;
    }
}