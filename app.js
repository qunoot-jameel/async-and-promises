function fetchGeeting() {
    setTimeout(function () {
        console.log("Hello Thursday Class");
    }, 2000);
}
;
fetchGeeting();
function simulateTask() {
    console.log("Task Started");
    setTimeout(function () {
        console.log("Task Completed");
    }, 1000);
}
;
simulateTask();
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
;
fetchData().then(function (message) {
    console.log(message);
});
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve("Data fetched successfully!");
        }
        else {
            reject("Data fetched failed!");
        }
        setTimeout(function () {
        }, 1000);
    });
}
;
fetchWithError().then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
function executeSequentially() {
    function fetchData() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("Data Fetched!");
            }, 1000);
        });
    }
}
function processData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data Processed!");
        }, 1000);
    });
}
fetchData().then(function (response) {
    console.log(response);
    return processData();
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
executeSequentially();
