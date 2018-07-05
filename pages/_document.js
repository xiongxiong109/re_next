import Document, { Head, Main, NextScript } from 'next/document'
// layout
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render() {
        return (
            <html>
                <Head>
                    <meta key="X-UA-Compatible" httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta key="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
                    <meta key="apple-mobile-web-app-capable" content="yes" name="apple-mobile-web-app-capable" />
                    <meta key="apple-mobile-web-app-status-bar-style" content="black" name="apple-mobile-web-app-status-bar-style" />
                    <meta key="telephone-format-detection" content="telephone=no" name="format-detection" />
                    <meta key="email-format-detection" content="email=no" name="format-detection" />
                    <link rel="stylesheet" href="//webresource.c-ctrip.com/styles/h5/common/n_main.css" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <title>Hello World</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}