export function Frame({ width, height, style, children }) {
    return (
        <div style={{ ...style, width: width, height: height, position: "relative" }}>
            {children}
        </div>
    )
}