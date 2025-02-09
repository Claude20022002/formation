import { Seo } from "@/ui/components/Seo";
import { Typography } from "@/ui/design/typography/Typography";

export default function Home() {
    return (
        <>
            <Seo title="Codeur Pro" description="Home page" />
            <div className="flex flex-col items-center justify-center h-screen">
                <Typography component="h1" variant="display">
                    Coders Monkeys{" "}
                </Typography>
            </div>
        </>
    );
}
