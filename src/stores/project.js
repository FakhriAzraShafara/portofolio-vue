import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        projects: [
            {
                slug: "fps-game",
                name: "First Person Shooter Game",
                image: "/fps-game.png",
                description: "Final Project in the Game Development course, creating a simple 3D FPS genre game. Developed in Unity using the C# programming language.",
                develop: "2022",
                tech: ["Unity"]
            },
            {
                slug: "userManagent-website",
                name: "User Management Website",
                image: "/website-user_management.png",
                description: "The dummy website used for the final project in the Backend Development course last semester was created using the Laravel Framework with a dashboard template using AdminLTE from Bootstrap. You can try it out here:( v3421042.mhs.d3tiuns.com ).",
                develop: "2022",
                tech: ["Laravel", "Bootstrap"]
            },
            {
                slug: "notification-website",
                name: "Notification Downtime and Call leader Website",
                image: "/website-notifikasi.png",
                description: `I am currently building this website with a team. This website is the final project of an independent study program organized by the government, as part of the "Merdeka Belajar" initiative in higher education. The website is being developed using Express.js as the backend technology and Vue.js as the frontend technology. We are also implementing unit testing to test the database and the methods within the endpoints that we have created.`,
                develop: "2023",
                tech: ["Express.js", "Vue.js"]
            },
        ]
    })
})