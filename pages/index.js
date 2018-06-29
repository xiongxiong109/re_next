import Head from 'next/head'
import { Component, Fragment } from 'react';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoUrl: '/static/thanos.jpg',
            logoNm: 'thanos'
        }
    }
    render() {
        const { logoUrl, logoNm } = this.state;
        return (
            <Fragment>
                <Head>
                    <title>Thanos</title>
                </Head>
                <div>Hello Next</div>
                <div className="th__logo">
                    <img src={logoUrl} alt={logoNm}/>
                </div>
                <style jsx>{`
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