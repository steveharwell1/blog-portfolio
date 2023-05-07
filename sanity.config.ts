import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas/index";


const config = defineConfig({
    projectId: "av2alk12",
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: "2023-05-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config