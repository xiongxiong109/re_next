import Head from 'next/head'
import Link from 'next/link'
import { Component, Fragment } from 'react'
import 'thanos/dist/main.css'
import { SearchInput, SearchCity } from 'thanos'
import './index.css'

class IndexPage extends Component {
    // 服务端同构数据出口
    static async getInitialProps({ query, pathname, req }) {
        console.log(pathname);
        console.log(query);
        const fetch = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Bear com');
            }, 300);
        })
        let rst = await fetch();
        return { title: rst };
    }
    constructor(props) {
        super(props);
        this.state = {
            logoUrl: '/static/thanos.jpg',
            logoNm: 'thanos'
        }
    }
    render() {
        const { title } = this.props;
        const { logoUrl, logoNm } = this.state;
        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                </Head>
                <div>Hello Next</div>
                <SearchInput />
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