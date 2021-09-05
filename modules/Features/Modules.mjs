function fun() {
    console.log("Default Export")
}

export default fun

export function export_to_html_file() {
    return `Also this line was imported from Modules.mjs straight into HTML.`;
}
