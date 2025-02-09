import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Description de ton site ici"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
