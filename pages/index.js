import React from "react"; 

export default () => (
  
    <svg 

    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" 
    width="100%" height="100%"
    // viewBox="50% 50% 20% 20%"
>

    {/* define style in SVG scope */} 
    <defs>
        {/* work when importing external  stylesheet
             <style type="text/css"> 
                {` 
                   @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
                `}
            </style>
        */}

        {/* fail on local font's importing*/}
    
        {/* fail using relative path
            <style type="text/css"> 
                {` 
                    @font-face{
                        font-family:AnuDaw;
                        src:
                            url("../font/Anud/AnuDaw.ttf") format("truetype"),
                            url("../font/Anud/AnuDaw.woff") format("woff"),
                            url("../font/Anud/AnuDaw.woff2") format("woff2"),
                            url("../font/Anud/AnuDaw.eot"),
                            url("../font/Anud/AnuDaw.eot?#iefix") format('embedded-opentype'),
                            url("../font/Anud/AnuDaw.svg")  format('svg');
                    }
                    text{
                        font-family: AnuDaw;
                        font-size:3em;
                    }
                `}
            </style>
        */}

        {/* fail using root path*/}
         <style type="text/css"> 
            {` 
                @font-face{
                    font-family:AnuDaw;
                    src:
                        url("../font/Anud/AnuDaw.ttf") format("truetype"),
                        url("../font/Anud/AnuDaw.woff") format("woff"),
                        url("../font/Anud/AnuDaw.woff2") format("woff2"),
                        url("../font/Anud/AnuDaw.eot"),
                        url("../font/Anud/AnuDaw.eot?#iefix") format('embedded-opentype'),
                        url("../font/Anud/AnuDaw.svg")  format('svg');
                }
                text{
                    font-family: AnuDaw;
                    font-size:3em;
                }
            `}
        </style>
    </defs>
    <defs> 
        <g  
            className="text_group"        
            id="panel_animation"
           // style={{fontFamily:"AnuDaw"}}
            y="0"
           
        >
             <text   
                    wordSpacing="-.45em"    
                    fontFamily="AnuDaw"
                >
                <tspan  x="0%" y="0%"  
                    dy="1.6em"   
                    >So</tspan> 
                <tspan  x="0%" y="-5%" 
                    dy="3em"  
                    fontFamily="AnuDaw">Food</tspan>
                </text> 

        </g>
    </defs> 

    <use
        width="100%" height="100%" 
        x="50%"
        xlinkHref="#panel_animation"                      
    /> 
</svg>    
  )
 
