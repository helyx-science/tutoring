import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="icon" 
      type="image/png" 
      href="https://cdn.glitch.com/04bc4c8d-1ea4-4299-b93b-d6e06d1a1970%2FCopy%20of%20helyx.png?v=1585690250958"
/>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </html>
    )
  }
}
