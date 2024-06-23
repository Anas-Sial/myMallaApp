
export const isIOS = () => {
    return Platform.OS == 'ios'
}

export const emptyFunction = () => { }

export const handleResetStack = (navigation, screenName) => {
    navigation.dispatch(
        CommonActions.reset({
            routes: [{ name: screenName }]
        })
    )
}