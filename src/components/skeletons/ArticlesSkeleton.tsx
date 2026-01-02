import { Layout } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export function ArticlesSkeleton() {
    return (
        <Layout>
            {/* Hero Section Skeleton */}
            <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
                <div className="section-container text-center">
                    <Skeleton className="h-12 w-64 mx-auto mb-4 bg-white/20" />
                    <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
                </div>
            </section>

            {/* Articles Section Skeleton */}
            <section className="section-padding">
                <div className="section-container">
                    {/* Search and Filter Skeleton */}
                    <div className="mb-12">
                        <Skeleton className="h-12 w-full max-w-md mx-auto mb-6" />
                        <div className="flex flex-wrap justify-center gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <Skeleton key={i} className="h-10 w-32" />
                            ))}
                        </div>
                    </div>

                    {/* Featured Article Skeleton */}
                    <div className="mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <Skeleton className="aspect-video w-full rounded-lg" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-10 w-32" />
                            </div>
                        </div>
                    </div>

                    {/* Articles Grid Skeleton */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="aspect-video w-full rounded-lg" />
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-16 w-full" />
                                <Skeleton className="h-10 w-28" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
