import { Seo } from "@/ui/components/Seo";

export default function Home() {
    return (
        <>
            <Seo
                title="Home"
                description="Home page"
                image="https://via.placeholder.com/150"
            />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">Hello world!</h1>
            </div>
        </>
    );
}
