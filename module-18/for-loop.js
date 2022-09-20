const dailyTasks = [
    "What is your daily tasks?",
    "1. Unlock a module at 9'o clock",
    "2. Quickly watch the tutorial video and start practice",
    "3. Take notes while watching the video",
    "4. Try the whole module by yourself after finishing the module",
    "5. If you are unable to understand (try to think but here a condition is applied), join the support session"
];

for (let i = 0; i < 10; i++) {
    if (i < dailyTasks.length) {
        console.log(dailyTasks[i]);
    }
}