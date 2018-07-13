import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import CarBaseModel from 'thanos/dist/CarBaseModel'
import Page from '@ctrip/nfes-mvc/lib/page'
import { CarBaseView } from 'thanos'
import TouchFeedText from 'thanos/dist/TouchFeedText'
import './index.css'

@CarBaseView
class IndexPage extends Page {
    pageid = 103335
    SEOModel = new CarBaseModel({
      url: '14269/queryseopageinfo.json'
    })
    // 服务端同构数据出口
    async getInitialState({ query, pathname, req }) {
        const { cid, stncd } = query;
        let rst = {};
        try {
            rst = await this.SEOModel.fetch({
                cid,
                pageid: this.pageid,
                lang: 'zh_cn'
            })
        } catch(err) {
            console.log(err)
        }
        return { 
            seo: rst,
            logoUrl: '/static/thanos.jpg',
            logoNm: 'thanos',
            header: {
                title: 'Thanos Page',
                noBorder: true
            }
        };
    }
    render() {
        let { logoUrl, logoNm, seo } = this.state;
        seo = seo || {};
        return (
            <Fragment>
                <Head>
                    <title>{seo.title}</title>
                    <meta name="keywords" content={seo.keywords} />
                    <meta name="description" content={seo.description} />
                </Head>
                <div className="th__logo">
                    <img src={logoUrl} alt={logoNm}/>
                </div>
                <TouchFeedText>
                    <Link href="/list">
                        <a>go to list</a>
                    </Link>
                </TouchFeedText>
            </Fragment>
        )
    }
}

export default IndexPage