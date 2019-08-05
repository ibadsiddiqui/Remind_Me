import Images from "../assets/images";
import Colors from "../constants/Colors";

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
                backgroundColor: Colors.personalCircle,
            };
        case "Work":
            return {
                ...style,
                backgroundColor: Colors.workCirlce,
            };
        case "Meeting":
            return {
                ...style,
                backgroundColor: Colors.meetingCirlce
            };
        case "Shopping":
            return {
                ...style,
                backgroundColor: Colors.shoppingCirlce
            };
        case "Party":
            return {
                ...style,
                backgroundColor: Colors.partyCirlce,
            };
        case "Study":
            return {
                ...style,
                backgroundColor: Colors.studyCirlce
            };
        default:
            break;
    }
}