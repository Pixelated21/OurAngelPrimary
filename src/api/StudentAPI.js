const endpoint = 'http://127.0.0.1:8000/api/'

export const fetchAllStudent = async () => {
    return await fetch("http://127.0.0.1:8000/api/students", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}
