
const notificationReducer = (state = 'you voted', action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_NOTIFY':
            return action.notify
        default:
            return state
    }
}

export const notifyChange = notify => {
    return {
        type: 'SET_NOTIFY',
        notify,
    }
}

export default notificationReducer