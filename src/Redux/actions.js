export const addUser = (userName) => {
    return {
        type: 'ADD_USER',
        value: userName
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER',
    }
}

export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

