const city = "New York"

const circle = {}

circle.radius = 5

circle['diamater'] = 10

circle['area'] = Math.PI * circle.radius ** 2

console.log(circle)

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

console.log(mondayMenu)
console.log(sundayMenu)
console.log(tuesDayMenu)