export default {
    namespaced: true,
    state: {
        opPage: {
            class: "message",
            header: true,
            footer: true,
            headContent: {
                style: "color:black ;background-color: white;",
                left: "",
                middle: "微信(18)",
                right: {
                    ico: "more"
                },
                popFloor: true
            }
        },
        titleData: "",
        informationIsShow: false
    }
};