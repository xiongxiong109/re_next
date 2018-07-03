import { Component, Fragment } from 'react'
import 'thanos/dist/main.css'
import { SearchCity } from 'thanos'
import Channel from 'thanos/dist/channel'

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
    componentDidMount() {
        console.log(Channel.get())
    }
}

export default ListPage