export const hasLeftMenu = (path : string) => {
    let result : boolean = false

    path !== "/admin" && path !== "/" ? result = true : result = false

    return result
}

export const hasHeader = (path: string) => {
    return path === "/" ? false : true
}

export const hasLogo = (path: string) => {
    return path === "/admin" ? true : false
}