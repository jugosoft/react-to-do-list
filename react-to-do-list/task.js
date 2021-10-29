// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

async function loadJsonAsync(url) {

    const response = await fetch(url);

    if (response.status == 200)
        return response.json();

    throw new HttpError(response);

}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Полное имя: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

async function demoGithubUser() {
    
    let name = prompt("Введите логин?", "iliakan");

    for (; ;) {
        try {
            const response = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
        } catch (error) {

            switch (error) {
                case error instanceof HttpError && err.response.status == 404:
                    alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                    break;
            }
        }
    }
}

demoGithubUser();