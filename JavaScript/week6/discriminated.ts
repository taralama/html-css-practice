interface Bird {
    type: 'bird'
    flyingSpeed : number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal1 = Bird | Horse;


function moveAnimal(animal: Animal1){
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
    
        
    }

    console.log('The speed is ' , speed)
}

moveAnimal({type:'bird',flyingSpeed:10})

//typecasting

const paragraph = document.getElementById('message-output')

// typescript cannot know automatically that it will be input element hence the typecasting is used

//typescript does not know that the element select is an input element hence the type is defined 
// if any input element is selected then it will be as as HTMLInputElement

const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;  //! means the expression will never tell null 

userInputElement.value = 'Hi there ! ' // this is not error because the typescript know that it is inputelement 