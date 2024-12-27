import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add image domain configuration for Supabase
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kkpqypbvgqiygycagfey.supabase.co',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
};

// Sentry plugin options
const sentryWebpackPluginOptions = {
    org: "nebilyousuf",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,
};

// Export the Next.js configuration wrapped with Sentry
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
