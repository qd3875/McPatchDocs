import process from 'node:process'
import { defaultTheme, defineUserConfig } from 'vuepress'

console.log(process.env.VUEPRESS_BASE);

const __BASE = (process.env.VUEPRESS_BASE ?? '/') as '/' | `/${string}/`

export default defineUserConfig({
    base: __BASE,
    lang: 'zh-CN',
    title: 'McPatch文档',
    description: 'McPatch的帮助文档',
    theme: defaultTheme({
        repo: 'BalloonUpdate/McPatchDocs',
        sidebarDepth: 0,
        backToHome: "回首页",
        contributorsText: "贡献者们",
        lastUpdatedText: "上次更新于",
        editLinkText: "在Github上编辑此页面",
        sidebar: [
            { text: 'Home', link: '/', children: [] },
            { text: '安装教程', collapsible: true, children: [
                '/docs/guide/preparations',
                '/docs/guide/manager',
                '/docs/guide/server',
                '/docs/guide/client',
                '/docs/guide/caution',
                '/docs/guide/auto-start', 
            ] },
            { text: '常见问题解答', collapsible: true, children: [
                '/faq/client',
                '/faq/manage',
            ] },
            { text: '高级教程', collapsible: true, children: [
                '/docs/advance/custom-deploy',
                '/docs/advance/spell-start', 
                '/docs/advance/modclient-self-update', 
                '/docs/advance/dynamic-loader', 
                '/docs/advance/combine', 
                '/docs/advance/cli-interface', 
                '/docs/advance/ignores', 
                '/docs/advance/overwrites', 
                '/docs/advance/run-as-exe', 
                '/docs/advance/technical-details', 
            ] }
        ]
    })
})
