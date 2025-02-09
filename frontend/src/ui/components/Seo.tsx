import Head from "next/head";

interface Props {
    title: string;
    description: string;
}

export const Seo = ({ title, description }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};
