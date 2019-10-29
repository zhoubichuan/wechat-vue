export default {
    namespaced: true,
    state: {
        opPage: {
            class: "me",
            header: true,
            footer: true
          },
        application: [
        {
            ico: "photo",
            title: "会跑的鸡腿",
            content: "微信号：zbc159x",
            route: "information"
        },
        {
            ico: "moneyBag",
            title: "支付",
            route: "moneyBag"
        },
        {
            ico: "collection",
            title: "收藏",
            route: "collection"
        },
        {
            ico: "album",
            title: "相册",
            route: "album"
        },
        {
            ico: "cardBag",
            title: "卡包",
            route: "cardBag"
        },
        {
            ico: "emoji",
            title: "表情",
            route: "emoji"
        },
        {
            ico: "setting",
            title: "设置",
            route: "setting"
        }
        ]
    }
};