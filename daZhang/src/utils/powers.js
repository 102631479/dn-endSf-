let targetarr = [

    //  号码管理  Number-management
    'm:worknum',
    'm:worknum:page:query',
    'm:worknum:set',
    'm:worknum:detail:query',

    // 企业查询  business-management
    'm:corp',
    'm:corp:add',
    'm:corp:delete',
    'm:corp:detail:query',
    'm:corp:update',
    'm:corp:page:query',
    'm:corp:list:query',
    'm:api:enable',
    'm:api:disable',
    'm:api:detail:page',

    // 同步管理  Synchronization-management
    'm:sync',
    'm:sync:page:query',
    'm:sync:bin',

    // 公司管理
    'm:companynum',
    'm:companynum:page:query',
    // H码表管理
    'm:hcode',
    'm:hcode:page:query',

    // 用户管理  
    'm:user',
    'm:user:page:query',
    'm:user:add',
    'm:user:update',
    'm:user:password',
    'm:user:delete',
    'm:user:detail:query',

    // 权限管理
    'm:permission',
    'm:permission:page:query',
    'm:permission:add',
    'm:permission:delete',
    'm:permission:update',
    'm:permission:list:query',

    // 角色管理
    'm:role',
    "m:role:page:query",
    "m:role:add",
    "m:role:bind",
    "m:role:update",
    "m:role:detail:query",
    'm:role:delete',
    "m:role:list:query",

    // 模板管理
    'm:template',
    'm:template:page:query',
    'm:template:delete',
    'm:template:add',
    '000m:template:detail:query',
    '000m:template:update000',

    // 语音管理 Voice-audio
    "m:audio",
    "m:audio:add",
    "m:audio:delete",
    "m:audio:page:query",
    "m:audio:detail:query",
]
let powersReturn = (data) => {

    if (data == true) return true
    // console.log(data, hasOneOf(data));
    return hasOneOf(data)
}
let hasOneOf = (arr) => {
    // return JSON.parse(localStorage.getItem('promise-list')).includes(arr)
    return targetarr.includes(arr)
}
// 抛出这个函数
export default powersReturn
// v-if="$powersReturn('')"   