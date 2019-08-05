const Locale = {
    Onboarding: {
        title1: "Reminders made simple",
        title2: "just for You.",
        Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque erat in blandit luctus.",
        getStartedText: "Get Started",
    },
    Tasks: {
        NoTasksDesc: "You have no task to do.",
        NoTasksHeading: "No tasks",
        TaskNotification: (list) => `Today you have ${list.length === 0 ? "no" : list.length} tasks!`,
    },
    ModalTasks: {
        modalHeading: "Add new tasks",
    }
}

export default Locale;