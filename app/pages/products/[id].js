export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: 1
            }
        },{
            params: {
                id: 2
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { id } = context.params

    return {
        props: {
            id
        }
    }

}

function Products(props) {
    return <div>Product Id: {props.id}</div>
}

export default Products