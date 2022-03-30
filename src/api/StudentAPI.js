const endpoint = 'http://127.0.0.1:8000/api/'

export const fetchAllStudent = async () => {
    return await fetch(`${endpoint}student`, {
        "method": "GET", "headers": {
            "Accept": "application/json"
        }
    })
            .then(response => (response.json())
            .then((data) => console.log(data))
            .catch(err => console.error(err)))


}
