console.log("1");

const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve();
        }, 2000);
    })
    .then(() => new Promise((resolve, reject) =>
        setTimeout(() => {
            reject("Что-то плохое вместо 3");
            console.log("3");
        }, 1000)
    ))
    .catch((error) => {
        console.log(error);
    })
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4");
            resolve();
        }, 1000);
    })
    )
    .finally(() => {
        console.log("Sequence is finished");
    });

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

async function loadJson(url) {

    const response = await fetch(url);

    if (response.status == 200)
        return response.json();

    throw new Error(response.status);
}
