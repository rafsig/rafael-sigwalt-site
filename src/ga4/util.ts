import ReactGA from 'react-ga4'

export function handleAnchorClick(url:string){
    ReactGA.event({
        action:"Link click",
        category:"Navigation",
        label:url,
    })
}

export function pageVisit(pageTitle:String){
    ReactGA.send({
        hitType:"pageview",
        page:pageTitle,
        title:pageTitle
    })
}

export function cardClick(label:string, caller:string){
    ReactGA.event({
        category:caller,
        action:"Open Modal",
        label:label,
    })
}