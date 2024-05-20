const URL_USERS_API = "http://localhost:2000/users"

export async function fetchUsersData (){
    const response = await fetch(URL_USERS_API)
    const data = await response.json()
    return data
}