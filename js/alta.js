//nombre*
// marca
//categoria*
//descripcion corta*

const validateString = (string) => {
    const regex = new RegExp("^[A-Za-z ]+$")
    return regex.test(string)
}
const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres`
    } else if (stg.length > maxLength) {
        return `El valor debe tener no mas de ${maxLength} caracteres`
    } else {
        return true
    }
}
//precio*
// stock*
//edad desde / hasta

const validatePositiveNumber = (num) => {
    return num >= 0
}

const validateInt = num => Number.isInteger(num)

//foto*

const saveGame = game => {
    const initialValue = localStorage.getItem("games")
    if (initialValue) {
        const oldValues = JSON.parse(initialValue)
        const newValues = oldValues.push(game)
        const newValStg = json.stringify(newValues)
        localStorage.setItem("games",newValStg)
    } else {
        const initialGames = JSON.stringify([game])
        localStorage.setItem("games", initialGames)
    }
}

const onSubmitProduct = e => {
    e.preventDefault()
    let validForm = true
    const nameInput = document.getElementById("name")
    const priceInput = document.getElementById("price")
    const stockInput = document.getElementById("stock")
    const brandInput = document.getElementById("brand")
    const categoryInput = document.getElementById("category")
    const shortDescriptionInput = document.getElementById("shortDescription")
    const longDescriptionInput = document.getElementById("longDescription")
    const freeDeliveryInput = document.getElementById("freeDelivery")
    const ageFromInput = document.getElementById("ageFrom")
    const ageToInput = document.getElementById("ageTo")
    const photoInput = document.getElementById("photo")

    const nameError = document.getElementById("nameError")
    const priceError = document.getElementById("priceError")
    const stockError = document.getElementById("stockError")
    const brandError = document.getElementById("brandError")
    const categoryError = document.getElementById("categoryError")
    const shortDescriptionError = document.getElementById("shortDescriptionError")
    const ageFromError = document.getElementById("ageFromError")
    const ageToError = document.getElementById("ageToError")

    //name
    if (validateString(nameInput.value)) {
        const validStg = validateStgLength(nameInput.value, 2, 30)
        if (validStg === true) {
            nameInput.ariaInvalid = false
            nameError.innerText = ""
            nameError.style.display = "none"
        } else {
            nameInput.ariaInvalid = true
            nameError.innerText = validStg
            nameError.style.display = "block"
        }
    } else {
        nameInput.ariaInvalid = true
        nameError.innerText = "Debe colocar valores alfabeticos"
        nameError.style.display = "block"
    }

    //marca
    if (!validateString(brandInput.value)) {
        const validStg = validateStgLength(brandInput.value, 2, 30)
        if (validStg === true) {
            brandInput.ariaInvalid = false
            brandError.innerText = ""
            brandError.style.display = "none"
        } else {
            brandInput.ariaInvalid = true
            brandError.innerText = validStg
            brandError.style.display = "block"
        }
    } else {
        brandInput.ariaInvalid = true
        brandError.innerText = "Debe colocar valores alfabeticos"
        brandError.style.display = "block"
    }

    //precio
    if (!validatePositiveNumber(priceInput.value)) {
        priceInput.ariaInvalid = true
        priceError.innerText = "Debe ser un numero positivo"
        priceError.style.display = "block"
    } else {
        priceInput.ariaInvalid = false
        priceError.innerText = ""
        priceError.style.display = "none"
    }

    if (validForm) {
        const game = {
            name: nameInput.value,
            price: parseFloat(priceInput.value).toFixed(2),
            stock: parseInt(stockInput.value),
            brand: brandInput.value,
            category: categoryInput.value,
            shortDescription: shortDescriptionInput.value,
            description: longDescriptionInput.value,
            freeDelivery: freeDeliveryInput.check,
            ageFrom: ageFromInput.value === "" ? "" : parseInt(ageFromInput.value),
            ageTo: ageToInput.value === "" ? "" : parseInt(ageToInput.value),
            photo: photoInput.value,
        }
        console.log(game)
    }
    saveGame(game)
    // console.log(name)
}