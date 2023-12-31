const getReposButton = document.getElementById('get-repos');
const reposList = document.getElementById('repos-list');

getReposButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    /* Send an HTTP GET request to the GitHub /users/{username}/repos end point and 
    display the list of repositories in the <ul> element provided in the HTML code.
    */
    // Example: https://api.github.com/users/facebook/repos
    const url = `https://api.github.com/users/${username}/repos`;
    const ulElement = document.getElementById('repos-list');
    // Fetch and display the list of repositories as li elements inside the ul element.
    const response = await fetch(url);
    const data = await response.json();

    
    data.forEach((item) => {
        const liElement = document.createElement('li');
        let a = document.createElement("a")
        a.href= item.html_url
        a.innerText = item.full_name
        liElement.innerText = item.full_name;
        liElement.appendChild(a);
        ulElement.appendChild(liElement);
    });

});

