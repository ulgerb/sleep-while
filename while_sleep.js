const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const action = async () => {
    for (let i = 1; i < 10; i++) {
        console.log(`turn ${i}`)
        console.log('Waiting for 500ms')
        await sleep(500)
    }
}
action()