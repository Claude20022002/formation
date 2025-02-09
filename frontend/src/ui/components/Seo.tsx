import Head from "next/head";

interface Props {
    title: string;
    description: string;
    image: string;
}

export const Seo = ({ title, description, image }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    );
};
