import { Component, Fragment } from 'react'
import Head from 'next/head'
class ListPage extends Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Hello List</title>
                </Head>
                <div>list page</div>
            </Fragment>
        )
    }
}

export default ListPage