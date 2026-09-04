function Product({ name, price,...others }) {
     console.log("...", { name, price,...others })

    return (
        <>
            <h3>Campus shoes = {name}</h3>
            <p>1198.99 = {price}</p>
            <p>{ others.description ? `description:-${others.description}` : "No description available" }</p>
        </>
    )
}
export default Product