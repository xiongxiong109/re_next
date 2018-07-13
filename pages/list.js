import { Component, Fragment } from 'react'
import Channel from 'thanos/dist/CarBaseChannel'
import Head from 'next/head'
import Page from '@ctrip/nfes-mvc/lib/page'
import { CarBaseView } from 'thanos'

@CarBaseView
class ListPage extends Page {
    getInitialState() {
        return {
            header: {
                title: '产品列表页',
                headless: true,
                scroller: true
            }
        }
    }
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Hello List</title>
                </Head>
                <div style={
                    {
                        height: '1000px'
                    }
                }>
                    <p>list page</p>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        console.log(Channel.get())
    }
}

export default ListPage