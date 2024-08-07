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

export function buttonClick(label:string){
    ReactGA.event({
        category:"Button Click",
        action:"Click",
        label,
    })
}

export function initialize() {
    if(import.meta.env.PROD){
        ReactGA.initialize('G-PWVWVME0J7');
        
    }
}