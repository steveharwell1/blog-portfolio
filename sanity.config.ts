import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"


const config = defineConfig({
    projectId: "biwkbn0x",
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: "2023-05-06",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config