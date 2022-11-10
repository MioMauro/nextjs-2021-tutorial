// our-news-page.com
import React, { Fragment } from "react"
import Link from "next/link"

function NewsPage() {
    return ( 
            <Fragment>
                <h1>The News page</h1>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/"></Link></li>
                </ul>
            </Fragment>
            )
}

export default NewsPage