import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config"

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.asset->alt,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.asset->alt,
            url,
            content
        }`,
        { slug }
    )
}