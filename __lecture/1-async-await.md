# 3.7.1 - Async / Await

---

BACK END

<blockquote>
    Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
    - It is built on top of Promises
    - is compatible with all existing Promise-based APIs.
</blockquote>

---

```js
const newPauseFunction = (sec) => {
    return new Promise(function(resolve) {
        console.log(`${sec}s pause`);
        setTimeout(() => resolve('resolved!'), sec * 1000);
    });
}

newPauseFunction(1)
    .then(() => newPauseFunction(2))
    .then(() => newPauseFunction(3))
    .then(() => newPauseFunction(3))
    .then(data => console.log(data));

    // can rewrite the above:

    const doIt = async () => {  // async function type expects await   inside it

        let data = await newPauseFunction(1);
        data = await newPauseFunction(data);
        data = await newPauseFunction(data);
        await newPauseFunction(data);
        console.log('no more "awaits"');

                // OR

        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('no more "awaits"');
    }
```

_let's convert it to async/await_

---

### Exercise

Convert the following to async/await

```js
transformText(string)
    .then((str) => allCaps(str))
    .then((str) => trimFirst(str))
    .then((str) => trimLast(str))
    .then((str) => replaceWithX(str))
    .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));


const doThedo = aysnc() => {
    let str = await allCaps(str);
    str = await trimFirst(str);
    str = await trimLast(str);
    str = await replaceWithX(str);
    console.log(str);
    return str;
    .catch((err) => console.log(err));
}
doThedo();

// or, Scott's bad answer

const transformText = async (string) => {
    let str = await allCaps(string);
        .then((str) => trimFirst(str))
        .then((str) => trimLast(str))
        .then((str) => replaceWithX(str))
        .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));
}

// or, Scott's good answer

const transformText = async (string) => {
    const str = await allCaps(string);
    const nextStr = await trimFirst(str));
    const nextnextStr = await trimLast(nextstr));
    const nextnextnextStr = await replaceWithX(nextnextstr));
        .then((nextnextnextstr) => {
        console.log(nextnextnextstr);
        return nextnextnextstr;
    })
    .catch((err) => console.log(err));
}

// or

transformText(string)
    .then((str) => allCaps(str))
    .then((str => {
        console.log(str);
        return str;  // if you dont return here, the next .then won't have any data to use
    }))
    .then((str) => trimFirst(str))
    .then((str => {
        console.log(str);
        return str;  // if you dont return here, the next .then won't have any data to use
    }))
    .then((str) => trimLast(str))
    .then((str => {
        console.log(str);
        return str;  // if you dont return here, the next .then won't have any data to use
    }))
    .then((str) => replaceWithX(str))
    .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));
```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
    try {
        console.log('Go');
        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('Stop');
    } catch (err) { console.log(err) }
}
asyncPause();
```

---