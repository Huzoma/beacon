import { Children } from "react";

export const NAV_LINKS = [
    { title: "Home", href: "/"},
    { title: "Jobs", href: "jobs"},
    { title: "Dashboard", href: "dashboard"},
    { title: "About", href: "about"},
    { 
        title: "More",
        children: [
            { title: "Contact", href: "contact" },
            { title: "Help", href: "help" },
            { title: "Signup", href: "/auth/signup" },
            { title: "Login", href: "/auth/login" },
        ]

    },

]