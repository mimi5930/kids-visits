import{w as u}from"./index.BcsZdRR-.js";function g(t,e){const o={},n={},r={$$scope:1};let c=t.length;for(;c--;){const a=t[c],s=e[c];if(s){for(const i in a)i in s||(n[i]=1);for(const i in s)r[i]||(o[i]=s[i],r[i]=1);t[c]=s}else for(const i in a)r[i]=1}for(const a in n)a in o||(o[a]=void 0);return o}function p(t){return typeof t=="object"&&t!==null?t:{}}function f(t){let e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))e=t.map(f).filter(Boolean).join(" ");else for(let o in t)t[o]&&(e&&(e+=" "),e+=o);return e}const h=(...t)=>t.map(f).filter(Boolean).join(" ");function y(t){if(!t)return 0;let{transitionDuration:e,transitionDelay:o}=window.getComputedStyle(t);const n=Number.parseFloat(e),r=Number.parseFloat(o);return!n&&!r?0:(e=e.split(",")[0],o=o.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(o))*1e3)}const l=u(d());l.subscribe(t=>m(t));function d(){var o,n,r;const t=((o=globalThis.document)==null?void 0:o.documentElement.getAttribute("data-bs-theme"))||"light",e=typeof((n=globalThis.window)==null?void 0:n.matchMedia)=="function"?(r=globalThis.window)==null?void 0:r.matchMedia("(prefers-color-scheme: dark)").matches:!1;return t==="dark"||t==="auto"&&e?"dark":"light"}function m(t,e){var n;let o=t;if(arguments.length===1){if(o=(n=globalThis.document)==null?void 0:n.documentElement,!o)return;e=t,l.update(()=>e)}o.setAttribute("data-bs-theme",e)}export{y as a,p as b,h as c,g};