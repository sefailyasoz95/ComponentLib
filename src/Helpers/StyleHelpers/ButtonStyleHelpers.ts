export const variantHelper = (variant: string, backgroundColor?: string) => {
    let variantStyle = variant === "outlined" ? {
        borderWidth: 1,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: backgroundColor
    }: {
        borderWidth: 1,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor
    }
    return variantStyle
}

export const sizeHelper = (size: string, height: number=35) => {
    let sizeStyle = size === "xlarge" ? {
        width: "95%",
        height
    } : size === "medium" ? {
        width: "45%",
        height
    } : size === "large" ? {
        width: "70%",
        height
    } : size === "small" ? {
        width: "20%",
        height
    } : {
        width: "auto",
        height
    }  
    return sizeStyle
}
export const cornerHelper = (corner: string) => {
    let cornerStyle = corner === "rounded" ? {
        borderRadius: 50,
    } : corner === "curved" ? {
        borderRadius: 10,
    } : {
        borderRadius: 0,
    }
    return cornerStyle
}