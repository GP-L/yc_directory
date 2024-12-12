import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

export default async function View({ id }: { id: string }) {
    const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });

    // TODO: Update the number of views

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">
                    {totalViews && totalViews > 1 ? <span>{totalViews} views</span> : <span>{totalViews} view</span>}
                </span>
            </p>
        </div>
    );
}
