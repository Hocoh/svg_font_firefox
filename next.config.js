const withCSS =require("@zeit/next-css");
const withFont=require("next-fonts");
const withImage=require("next-images") 

module.exports= withCSS(withFont(withImage({
    cssModules:true,
    webpack(config, optionStock){
        // config represent virtually the webpack config object {}
        config.module.rules.push({
            test: /\.svg$/,
            use:[
                {loader:"file-loader"},
                {
                    loader:"svgo-loader",
                    options:{
                        plugins:[
                            {removeTitle:true},
                            {convertColors:{shorthex:false}},
                            {convertPathData:false}
                        ]
                    }
                }
            ]
        })
        return config
    }
})))