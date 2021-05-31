
// Function for adding account ID to database
export async function registerAccount(id, domain) {

    const body = {

        userId: id,
        loginDomain: domain

    }

    const response = await fetch("http://localhost:5000/signup", {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)

    });

}