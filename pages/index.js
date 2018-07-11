import Head from 'next/head'
import Link from 'next/link'
import { Component, Fragment } from 'react'
import 'thanos/dist/main.css'
import { SearchCity } from 'thanos'
// import Channel from 'thanos/dist/channel'
import CarBaseModel from 'thanos/dist/model'
import Page from '@ctrip/nfes-mvc/lib/page'
import CarBaseView from 'thanos/dist/view'
import './index.css'

@CarBaseView
class IndexPage extends Page {
    // static pageid = 103335
    // static SEOModel = new CarBaseModel({
    //   url: '14269/queryseopageinfo.json'
    // })
    // 服务端同构数据出口
    // static async getInitialState({ query, pathname, req }) {
    //     const { cid, stncd } = query;
    //     let rst = {};
    //     try {
    //         rst = await IndexPage.SEOModel.fetch({
    //             cid,
    //             pageid: IndexPage.pageid,
    //             lang: 'zh_cn'
    //         })
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     return { seo: rst };
    // }
    constructor(props) {
        super(props);
        this.state = {
            logoUrl: '/static/thanos.jpg',
            logoNm: 'thanos'
        }
    }
    render() {
        let { seo } = this.props;
        const { logoUrl, logoNm } = this.state;
        seo = seo || {};
        return (
            <Fragment>
                <div>Hello Next</div>
                <SearchCity />
                <div className="th__logo">
                    <img src={logoUrl} alt={logoNm}/>
                </div>
                <Link href="/list">
                    <a>go to list</a>
                </Link>
            </Fragment>
        )
    }
}

export default IndexPage