function BrastlewarkAPI() {

    function getData() {

        const url = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`
        return new Promise((res, rej) => {
            fetch(url)
                .then(res => res.json())
                .then(({
                    Brastlewark
                }) => res(Brastlewark))
                .catch(err => rej(err))
        })
    }
    return {
        getData
    }
}

export default BrastlewarkAPI()