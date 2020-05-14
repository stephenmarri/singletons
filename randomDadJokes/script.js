window.addEventListener('load',()=>{
    const jokeEl = document.getElementById('joke');
    const jokeBtn = document.getElementById('get_joke');
    const tag = document.getElementById('tag');
    var apis = [generateDadJoke,generateNorrisJoke,generateGithubJoke,generateGeekJoke]

    jokeBtn.addEventListener('click',()=>{
        let pick = Math.floor(Math.random()*(apis.length));
        apis[pick]();
        
    });
    generateDadJoke();




    
    async function generateDadJoke(){
        console.log('starting fetch');
        const jokeFromAPI = await fetch('https://icanhazdadjoke.com/',{
            headers : {
                "Accept":"application/json"
            }
        });

        const joke = await jokeFromAPI.json();
        jokeEl.textContent = joke.joke;
        tag.textContent="[Dad Jokes]";

    };

    async function generateNorrisJoke(){
        console.log('starting fetch');
        const jokeFromAPI = await fetch('https://api.chucknorris.io/jokes/random');
        const joke = await jokeFromAPI.json();
        jokeEl.textContent = joke.value;
        tag.textContent="[Chuck Norris Jokes]";

    };
    async function generateGithubJoke(){
        console.log('starting fetch');
        const jokeFromAPI = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await jokeFromAPI.json();
        jokeEl.textContent = joke.setup +" " + joke.punchline;
        tag.textContent="[Random Jokes]";

    };
    async function generateGeekJoke(){
        console.log('starting fetch');
        const jokeFromAPI = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const joke = await jokeFromAPI.json();
        jokeEl.textContent = joke.joke;
        tag.textContent="[Geek Jokes]";

    };








})