import { Layout } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export function ProgramsSkeleton() {
    return (
        <Layout>
            {/* Hero Section Skeleton */}
            <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
                <div className="section-container text-center">
                    <Skeleton className="h-12 w-80 mx-auto mb-4 bg-white/20" />
                    <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2 bg-white/10" />
                    <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
                </div>
            </section>

            {/* Programs Grid Skeleton */}
            <section className="section-padding">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border rounded-lg p-6 space-y-4">
                                <Skeleton className="h-12 w-12 rounded-lg" />
                                <Skeleton className="h-7 w-3/4" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-20 w-full" />

                                {/* Details skeleton */}
                                <div className="space-y-2 pt-4">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>

                                {/* Topics skeleton */}
                                <div className="space-y-2 pt-4">
                                    <Skeleton className="h-4 w-40" />
                                    <div className="flex flex-wrap gap-2">
                                        {[1, 2, 3].map((j) => (
                                            <Skeleton key={j} className="h-6 w-24" />
                                        ))}
                                    </div>
                                </div>

                                {/* Button skeleton */}
                                <Skeleton className="h-10 w-full mt-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
