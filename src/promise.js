// Promise 생성시 전달한 콜백함수가 바로 실행됨
const promise = new Promise((resolve, reject) => {
    console.log("promise 실행됨")
    setTimeout(() => {
        // resolve("man");
        reject(new Error("missing"))
    }, 2000)
})

// name 은 Promise 에서 resolve(해결하다) 콜백 함수로 전달 받은 값
// then 은 Promise 의 값을 리턴함, 고로 catch 를 사용할 수 있는 것
promise.then((name) => {
    console.log(name);
}).catch(err => {
    console.log(err);
}).finally(() => { 
    // 성공이던 실패던 무조건 실행됨
    console.log("finally");
})


// ellie youtube callback example => promise
class UserStorage{

    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') ||(id === 'coder' && password === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000)
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name : 'ellie', role : 'admin'})
                } else {
                    onError(new Error('no access'));
                }
            }, 1000)
        })
    }

}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')

userStorage
 .loginUser(id, password)
 .then(user => userStorage.getRoles(user))
 .then(userWithRole => {
     console.log("success");
     alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
 })
 .catch(console.log)

