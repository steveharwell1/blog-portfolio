import { getProject } from "@/sanity/sanity-utils"

type Props = {
    params: { project: string}
}
export default async function Project({params: {project: slug}}: Props) {
    const project = await getProject(slug)

    return <div>{project.name}</div>
}