const express =require("express")
const app=express()
const port=3001

const country=[{
    name:"afganishtan",
    code:93
},
{
    name:"albania",
    code:355
}
,
{
    name:"algeria",
    code:213
},
{
    name:"american samoa",
    code:1-684
},
{
    name:"andora",
    code:376
},
{
    name:"angola",
    code:244
},
{
    name:"antartica",
    code:672
},
{
    name:"algeria",
    code:213
},
{
    name:"argentina",
    code:54
},
{
    name:"armenia",
    code:374
},
{
    name:"aruba",
    code:297
},
{
    name:"australia",
    code:61
},
{
    name:"austria",
    code:43
},
{
    name:"azerbaijaan",
    code:994
},
{
    name:"bangladesh",
    code:881
},{
    name:"bahrain",
    code:973
},
{
    name:"belarus",
    code:375
},
{
    name:"belgium",
    code:32
},
{
    name:"benin",
    code:229
},
{
    name:"bermuda",
    code:1-441
},
{
    name:"bhutan",
    code:975
},
{
    name:"bolivia",
    code:991
},
{
    name:"botswana",
    code:267
},
{
    name:"brazil",
    code:55
},
{
    name:"british indian ocean teritory",
    code:246
},
{
    name:"brunie",
    code:673
},
{
    name:"bulgaria",
    code:359
},
{
    name:"burundi",
    code:257
},
{
    name:"combodia",
    code:855
},
{
    name:"cameroon",
    code:237
},
{
    name:"canada",
    code:1
},
{
    name:"cape verde",
    code:238
},
{
    name:"central african republic",
    code:213
},
{
    name:"chad",
    code:255
},
{
    name:"chile",
    code:56
},
{
    name:"china",
    code:86
},
{
    name:"christmas island",
    code:61
},
{
    name:"cocos islands",
    code:61
},
{
    name:"colombia",
    code:57
},
{
    name:"comoros",
    code:269
},
{
    name:"cook islands",
    code:682
},
{
    name:"costa rica",
    code:506
},
{
    name:"cuba",
    code:53
},
{
    name:"curacao",
    code:599
},
{
    name:"cyprus",
    code:357
},
{
    name:"czech republic",
    code:420
},
{
    name:"congo",
    code:243
},
{
    name:"denmark",
    code:45
},
{
    name:"dominicia",
    code:1-767
},
{
    name:"east-timor",
    code:670
},
{
    name:"egypt",
    code:20
},
{
    name:"EI salvador",
    code:503
},
{
    name:"Equatorial Guinea",
    code:240
}
,
{
    name:"Eritrea",
    code:291
},
{
    name:"estonia",
    code:372
},
{
    name:"Ethiopia",
    code:251
},
{
    name:"Fiji",
    code:679
},
{
    name:"finland",
    code:358
},
{
    name:"france",
    code:33
},
{
    name:"gabon",
    code:241
},
{
    name:"gambia",
    code:220
},
{
    name:"georgia",
    code:995
},
{
    name:"germany",
    code:49
},
{
    name:"ghana",
    code:233
},
{
    name:"greece",
    code:30
},
{
    name:"greenland",
    code:299
},
{
    name:"grenada",
    code:1-473
},
{
    name:"guam",
    code:1-671
},
{
    name:"guinea",
    code:224
},
{
    name:"guinea-bissao",
    code:245
},
{
    name:"guyana",
    code:592
},
{
    name:"haiti",
    code:509
},
{
    name:"hondurus",
    code:504
},
{
    name:"hong kong",
    code:852
},
{
    name:"hungary",
    code:36
},
{
    name:"iceland",
    code:354
},
{
    name:"india",
    code:91
},
{
    name:"indonesia",
    code:61
},
{
    name:"iran",
    code:98
},
{
    name:"iraq",
    code:964
},
{
    name:"ireland",
    code:353
},
{
    name:"isle of man",
    code:44-1624
},
{
    name:"israel",
    code:972
},
{
    name:"italy",
    code:39
},
{
    name:"jamaica",
    code:1-876
},
{
    name:"japan",
    code:81
},
{
    name:"jersey",
    code:44-1534
},
{
    name:"jordan",
    code:962
},
{
    name:"kazakhstan",
    code:7
},
{
    name:"kenya",
    code:254
},
{
    name:"kiribati",
    code:686
},
{
    name:"kosovo",
    code:383
},
{
    name:"kuwait",
    code:965
},
{
    name:"kyrgistan",
    code:996
},

]

app.get("/api/country",(req,res)=>{
res.json(country)
})

app.listen(port,()=>{
    console.log(` server listening at port : ${port}`)
})