const city = "New York"

const circle = {}

circle.radius = 5

circle['diamater'] = 10

circle['area'] = Math.PI * circle.radius ** 2

// console.log(circle)

const mondayMenu = {
    cheesePlate: {
        soft: 'Chèvre',
        semiSoft: 'Gruyère',
        hard: 'Manchego'
    },
    fries: 'Curly',
    salad: 'Cobb'
};

mondayMenu.fries = 'Sweet potato';

// console.log(mondayMenu)

function destructivelyUpdateObject(obj, key, value) {
    obj[key] = value
    return obj
}
const tuesDayMenu = destructivelyUpdateObject(mondayMenu, 'salad', 'Caesar')

function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = {...obj }
    newObj[key] = value
    return newObj
}

const sundayMenu = nondestructivelyUpdateObject(tuesDayMenu, 'fries', 'Shoestring')

// console.log(mondayMenu)
// console.log(sundayMenu)
// console.log(tuesDayMenu)

// console.log(Object.assign({ eggs: 3 }, { flour: '1 cup' }))
// console.log(Object.assign({ eggs: 3 }, { chocolateChips: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' }))

// recipes.flour = '2 cups'

// recipes.flour = '1/2 cup'

// console.log(recipes)


function nondestructivelyUpdateObjectTwo(obj, key, value) {
    return Object.assign({}, obj, {
        [key]: value
    })
}

const recipes = { eggs: 3 }

const newRecipe = nondestructivelyUpdateObjectTwo(recipes, 'chocolate', '1 cup')

console.log(recipes)
console.log(newRecipe)

function createNewMenu(oldMenu, menuChanges) {
    return Object.assign({}, oldMenu, menuChanges)
}

const tuesdayMenu = {
    cheesePlate: {
        soft: 'Chèvre',
        semiSoft: 'Gruyère',
        hard: 'Manchego'
    },
    fries: 'Sweet potato',
    salad: 'Caesar'
};

const newOfferings = {
    cheesePlate: {
        soft: 'Brie',
        semiSoft: 'Fontina',
        hard: 'Provolone'
    },
    salad: 'Southwestern'
};

const wednesdayMenu = createNewMenu(tuesDayMenu, newOfferings)


delete wednesdayMenu.salad

console.log(tuesdayMenu)
console.log(wednesdayMenu)