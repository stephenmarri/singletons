window.addEventListener('load',()=>{
    const jokeEl = document.getElementById('joke');
    const jokeBtn = document.getElementById('get_joke');

    jokeBtn.addEventListener('click',generateJoke);
    generateJoke();
    async function generateJoke(){
        console.log('starting fetch');
        const jokeFromAPI = await fetch('https://icanhazdadjoke.com/',{
            headers : {
                "Accept":"application/json"
            }
        });

        const joke = await jokeFromAPI.json();
        jokeEl.textContent = joke.joke;

    };








})