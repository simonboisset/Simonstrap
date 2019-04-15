function palette(r,g,b){
    return {
        dark:`rgb(${Math.round(r/1.2)}, ${Math.round(g/1.2)}, ${Math.round(b/1.2)})`,
        regular:`rgb(${r}, ${g}, ${b})`,
        light:`rgb(${Math.round(r+(255-r)/2.5)}, ${Math.round(g+(255-g)/2.5)}, ${Math.round(b+(255-b)/2.5)})`,
    }
}
export const basic = {
    color : {
        default : palette(100,100,100),
        primary : palette(255,193,7),
        segondary : palette(195,239,218),
        success : palette(195,239,218),
        warning : palette(195,239,218),
        danger : palette(255,87,34),
    },
    transition:{
        delay:"300ms"
    },
    elevation:[
        "none"

    ],
    borderRadius:{
        default:"3px",
        rounded : "20px"
    },
    ripple : true,

}
