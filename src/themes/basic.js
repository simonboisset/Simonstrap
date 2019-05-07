function palette(r,g,b){
    return {
        dark:`rgb(${Math.round(r/1.2)}, ${Math.round(g/1.2)}, ${Math.round(b/1.2)})`,
        regular:`rgb(${r}, ${g}, ${b})`,
        light:`rgb(${Math.round(r+(255-r)/3.5)}, ${Math.round(g+(255-g)/3.5)}, ${Math.round(b+(255-b)/3.5)})`,
    }
}
export const basic = {
    size:{
        width:"200px",
        height:"40px"
    },
    color : {
        default : palette(100,100,100),
        primary : palette(255,193,7),
        segondary : palette(195,239,218),
        success : palette(195,239,218),
        warning : palette(195,239,218),
        danger : palette(255,87,34),
    },
    transition:{
        delay:"500ms"
    },
    elevation:[
        "none",
        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    ],
    borderRadius:{
        default:"3px",
        rounded : "20px"
    },
    ripple : true,
    fontSize:{
        h1:"20px",
        h2:"18px",
        h3:"14px",
        h4:"12px",
        h5:"10px",
        h6:"18px"
    }
}
