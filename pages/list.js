import { Component, Fragment } from 'react'
// import 'thanos/dist/main.css'
import { SearchCity } from 'thanos'

import Head from 'next/head'
class ListPage extends Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Hello List</title>
                </Head>
                <div>
                    <p>list page</p>
                    <SearchCity />
                </div>
            </Fragment>
        )
    }
}

export default ListPage