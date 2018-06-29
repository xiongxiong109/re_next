import Head from 'next/head'
import { Component, Fragment } from 'react'

class IndexPage extends Component {
    // 服务端同构数据出口
    static async getInitialProps({ req }) {
        const fetch = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('gogogo');
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
                <div className="th__logo">
                    <img src={logoUrl} alt={logoNm}/>
                </div>
                <style>{`
                    .th__logo {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    .th__logo img {
                        width: 100%;
                    }
                `}</style>
            </Fragment>
        )
    }
}

export default IndexPage