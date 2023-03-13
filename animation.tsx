export const FadInup={
    initial:{
        opacity:0,
        y:60
    },
    animate:{
        opacity:1,
        y:0,
        transition:
        {
            type:'spring',
            stiffness:160,
        }
    },
    exit:{
        opacity:0,
        transition:
        {
            duration:0.2
        }
    }
}

export const routeAnimation={
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.1
        },   

    },
    exit:{
        opacity:0,
        transition:{
            duration:0.2,
            ease:'easeInOut'
        }
    }
}

export const stragger={
    initial: {},
    animate:{
        transition:{
            staggerChildren:0.1,
        }
    },
    exit:{}
}



