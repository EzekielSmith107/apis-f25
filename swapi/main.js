let button = document.querySelector("button");

const planetFunc = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then (response => {
        for(let i = 0; i < response.data.results[0].residents.length; i++) {
            axios.get(response.data.results[0].residents[i])
            .then (response => {
                const head2 = document.createElement("h2");
                head2.innerText = response.data.name;
                document.querySelector("body").appendChild(head2);
            })
        }
    })
}

button.addEventListener("click", planetFunc);

