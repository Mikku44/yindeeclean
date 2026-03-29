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
        route("article", "routes/article.tsx"),
    ]
    )
] satisfies RouteConfig;
