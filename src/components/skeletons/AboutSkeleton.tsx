import { Layout } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
    return (
        <Layout>
            {/* Hero Section Skeleton */}
            <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
                <div className="section-container text-center">
                    <Skeleton className="h-12 w-64 mx-auto mb-4 bg-white/20" />
                    <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2 bg-white/10" />
                    <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
                </div>
            </section>

            {/* Mission & Vision Skeleton */}
            <section className="section-padding">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-12">
                        {[1, 2].map((i) => (
                            <div key={i} className="text-center space-y-4">
                                <Skeleton className="h-16 w-16 mx-auto rounded-full" />
                                <Skeleton className="h-8 w-32 mx-auto" />
                                <Skeleton className="h-20 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Skeleton */}
            <section className="section-padding bg-muted/30">
                <div className="section-container">
                    <Skeleton className="h-10 w-64 mx-auto mb-12" />
                    <div className="max-w-4xl mx-auto space-y-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-6">
                                <Skeleton className="h-20 w-20 rounded-full flex-shrink-0" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-6 w-32" />
                                    <Skeleton className="h-16 w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Skeleton */}
            <section className="section-padding">
                <div className="section-container">
                    <Skeleton className="h-10 w-48 mx-auto mb-12" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center space-y-4">
                                <Skeleton className="h-12 w-12 mx-auto" />
                                <Skeleton className="h-6 w-32 mx-auto" />
                                <Skeleton className="h-16 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Skeleton */}
            <section className="section-padding bg-muted/30">
                <div className="section-container">
                    <Skeleton className="h-10 w-48 mx-auto mb-12" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center space-y-4">
                                <Skeleton className="h-32 w-32 mx-auto rounded-full" />
                                <Skeleton className="h-6 w-40 mx-auto" />
                                <Skeleton className="h-4 w-32 mx-auto" />
                                <Skeleton className="h-16 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
