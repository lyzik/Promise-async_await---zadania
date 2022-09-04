(async () => {
    try{
        const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10");
        const peopleJson = await res.json();
        peopleJson.data.forEach(element => {
            const newDiv = document.createElement('div');
            const image = document.createElement('img');
            image.setAttribute('src', element.image);
            const newContent = document.createTextNode(`${element.firstname} ${element.lastname}`);
            newDiv.appendChild(newContent);
            document.body.appendChild(newDiv);
            document.body.appendChild(image)
        });
    }catch(error){
        console.error(`Error: ${error}`);
    }
    })();