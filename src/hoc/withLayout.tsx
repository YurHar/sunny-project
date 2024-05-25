/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

// @ts-ignore
const withLayout = (WrappedComponent, Layout) => (props?: any) => {
    // @ts-ignore
    return (
        <Layout>
            <WrappedComponent {...props} />
        </Layout>
    )
}

export default withLayout