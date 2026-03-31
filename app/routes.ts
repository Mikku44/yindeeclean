import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/mainLayout.tsx", [
        index("routes/home.tsx"),
        route("services", "routes/services.tsx"),
        route("home-cleaning", "routes/services/home-cleaning.tsx"),
        route("big-cleaning", "routes/services/big-cleaning.tsx"),
        route("disinfection-cleaning", "routes/services/disinfection-cleaning.tsx"),
        route("upholstery-cleaning", "routes/services/upholstery-cleaning.tsx"),
        route("yindee-clean-standard", "routes/yindee-clean-standard.tsx"),
        route("about", "routes/about.tsx"),
        route("contact", "routes/contact.tsx"),
        route("booking", "routes/booking.tsx"),
        route("articles", "routes/article.tsx"),
        route("articles/:slug", "routes/article-detail.tsx"),
        route("privacy-policy", "routes/privacy-policy.tsx"),
        route("terms-of-service", "routes/terms-of-service.tsx"),
    ]
    )
] satisfies RouteConfig;
