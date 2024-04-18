const Layout = ({ children }) => {
    return (
        <div>
            <h1 style={{ color: "white", backgroundColor: "black", textAlign: "center", padding: "20px 0px" }}>Common Layout for About Page</h1>
            {
                children
            }
        </div>
    )
}
export default Layout