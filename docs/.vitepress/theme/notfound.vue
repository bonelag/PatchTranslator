<script setup>

const supportlangs = ['zh', 'en', 'ja', 'vi', 'cht', 'ko', 'ru']
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const withBase = (path) => `${base}${path}`

function browserlang() {
    let l = navigator.language
    let ls = l.split('-')
    if (ls.length) l = ls[0]
    if (l == 'zh' && ls.length == 2 && (ls[1] == 'HK' || ls[1] == 'TW')) return 'cht'
    if (supportlangs.includes(l)) return l
    return 'en'
}
function cachedlang() {
    return window.localStorage.currentlang ? window.localStorage.currentlang : browserlang()
}
function urlcheck() {
    let url = window.location.pathname;
    console.log(url)
    let rel = base && url.startsWith(base) ? url.slice(base.length) : url
    let sps = rel.split('/')
    console.log(sps)
    if (sps.length >= 2) {
        if (!supportlangs.includes(sps[1])) {
            window.location.pathname = withBase(`/${cachedlang()}/` + sps.slice(1).join('/'))
        }
        else {
            window.location.pathname = withBase(`/${sps[1]}/`)
        }
    }
    else {
        window.location.pathname = withBase(`/${cachedlang()}/`)
    }
}
urlcheck()
</script>

<template #not-found>
</template>