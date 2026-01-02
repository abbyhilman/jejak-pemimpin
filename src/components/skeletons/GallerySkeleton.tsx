import { Layout } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export function GallerySkeleton() {
    return (
        <Layout>
            {/* Hero Section Skeleton */}
            <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
                <div className="section-container text-center">
                    <Skeleton className="h-12 w-48 mx-auto mb-4 bg-white/20" />
                    <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
                </div>
            </section>

            {/* Gallery Section Skeleton */}
            <section className="section-padding">
                <div className="section-container">
                    {/* Category Filter Skeleton */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} className="h-10 w-24" />
                        ))}
                    </div>

                    {/* Gallery Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="group cursor-pointer">
                                <Skeleton className="aspect-[4/3] w-full rounded-lg mb-4" />
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
